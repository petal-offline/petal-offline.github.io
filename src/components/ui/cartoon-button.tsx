"use client";

interface CartoonButtonProps {
    label: string;
    color?: string;
    hasHighlight?: boolean;
    disabled?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function CartoonButton({
    label,
    color = "bg-pink-400",
    hasHighlight = true,
    disabled = false,
    href,
    target,
    rel,
    onClick,
    children,
}: CartoonButtonProps) {
    const handleClick = () => {
        if (disabled) return;
        onClick?.();
    };

    const className = `relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full border-2 border-zinc-100/20 px-8 text-base font-bold text-zinc-100 transition-all duration-150 group
        ${color}
        hover:shadow-[0_0_24px_0_rgba(244,114,182,0.45)]
        ${disabled ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"}`;

    const content = (
        <>
            {children && <span className="relative z-10 flex items-center">{children}</span>}
            <span className="relative z-10 whitespace-nowrap">{label}</span>
            {hasHighlight && !disabled && (
                <span aria-hidden="true" className="absolute left-[-100%] top-1/2 h-24 w-16 -translate-y-1/2 rotate-12 bg-white/40 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={disabled ? undefined : href}
                target={target}
                rel={rel}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
                className={className}
            >
                {content}
            </a>
        );
    }

    return (
        <button type="button" disabled={disabled} onClick={handleClick} className={className}>
            {content}
        </button>
    );
}
