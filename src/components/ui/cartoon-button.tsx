"use client";

interface CartoonButtonProps {
    label: string;
    color?: string;
    hasHighlight?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function CartoonButton({
    label,
    color = "bg-pink-400",
    hasHighlight = true,
    disabled = false,
    onClick,
    children,
}: CartoonButtonProps) {
    const handleClick = () => {
        if (disabled) return;
        onClick?.();
    };

    return (
        <div
            className={`inline-block ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
            <button
                disabled={disabled}
                onClick={handleClick}
                className={`relative h-14 px-8 text-base rounded-full font-bold text-zinc-100 border-2 border-zinc-100/20 transition-all duration-150 overflow-hidden group flex items-center gap-3
        ${color}
        hover:shadow-[0_0_24px_0_rgba(244,114,182,0.45)]
        ${disabled ? "opacity-50 pointer-events-none" : "hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"}`}
            >
                {children && (
                    <span className="relative z-10 flex items-center">{children}</span>
                )}
                <span className="relative z-10 whitespace-nowrap">{label}</span>
                {hasHighlight && !disabled && (
                    <div className="absolute top-1/2 left-[-100%] w-16 h-24 bg-white/40 -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
                )}
            </button>
        </div>
    );
}
