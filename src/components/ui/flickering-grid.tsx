"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Color from "color-bits";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)",
): string => {
  if (typeof window === "undefined") return fallback;
  if (!cssColor) return fallback;

  try {
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div");
      element.style.color = cssColor;
      document.body.appendChild(element);
      const computedColor = window.getComputedStyle(element).color;
      document.body.removeChild(element);
      return Color.formatRGBA(Color.parse(computedColor));
    }
    return Color.formatRGBA(Color.parse(cssColor as string));
  } catch (e) {
    console.error("Color parsing failed:", e);
    return fallback;
  }
};

export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color;
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    return getRGBA(color);
  }, [color]);

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      textMask: Uint8Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr;
          const y = j * (squareSize + gridGap) * dpr;

          const opacity = squares[i * rows + j];
          const hasText = textMask[i * rows + j] === 1;
          const finalOpacity = hasText ? Math.min(1, opacity * 3 + 0.4) : opacity;

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity);
          ctx.fillRect(x, y, squareSize * dpr, squareSize * dpr);
        }
      }
    },
    [memoizedColor, squareSize, gridGap],
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      // Precompute text mask once — avoids per-frame canvas allocation + getImageData
      const textMask = new Uint8Array(cols * rows);
      if (text) {
        const maskCanvas = document.createElement("canvas");
        maskCanvas.width = width * dpr;
        maskCanvas.height = height * dpr;
        const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
        if (maskCtx) {
          maskCtx.scale(dpr, dpr);
          maskCtx.fillStyle = "white";
          maskCtx.font = `${fontWeight} ${fontSize}px "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
          maskCtx.textAlign = "center";
          maskCtx.textBaseline = "middle";
          maskCtx.fillText(text, width / 2, height / 2);

          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              const x = Math.round(i * (squareSize + gridGap) * dpr);
              const y = Math.round(j * (squareSize + gridGap) * dpr);
              const sw = Math.max(1, Math.round(squareSize * dpr));
              const sh = Math.max(1, Math.round(squareSize * dpr));
              const data = maskCtx.getImageData(x, y, sw, sh).data;
              const hasText = data.some((v, idx) => idx % 4 === 0 && v > 0);
              textMask[i * rows + j] = hasText ? 1 : 0;
            }
          }
        }
      }

      return { cols, rows, squares, dpr, textMask };
    },
    [squareSize, gridGap, maxOpacity, text, fontSize, fontWeight],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initialWidth = width || container.clientWidth;
    const initialHeight = height || container.clientHeight;
    setCanvasSize({ width: initialWidth, height: initialHeight });
    let gridParams = setupCanvas(canvas, initialWidth, initialHeight);

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };
    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.textMask,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);

    if (shouldReduceMotion) {
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.textMask,
        gridParams.dpr,
      );
    } else if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          willChange: "transform",
        }}
      />
    </div>
  );
};
