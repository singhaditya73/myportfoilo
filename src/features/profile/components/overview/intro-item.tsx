import type { LucideProps } from "lucide-react";

export function IntroItem({
  icon: Icon,
  content,
  href,
  onClick,
  className,
}: {
  icon: React.ComponentType<LucideProps>;
  content: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <span
        className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted"
        aria-hidden="true"
      >
        <Icon className="pointer-events-none size-4 text-muted-foreground" />
      </span>

      <p className="text-balance">
        {onClick ? (
          <button
            onClick={onClick}
            className={`decoration-ring underline-offset-4 hover:underline ${className || ""}`}
          >
            {content}
          </button>
        ) : href ? (
          <a
            className={`decoration-ring underline-offset-4 hover:underline ${className || ""}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <span className={className}>{content}</span>
        )}
      </p>
    </div>
  );
}
