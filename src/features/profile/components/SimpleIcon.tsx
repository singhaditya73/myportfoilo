// SimpleIcon.tsx
import React from "react";

type SimpleIconProps = {
  icon: { svg: string; title: string };
  size?: number;
};

export function SimpleIcon({ icon, size = 32 }: SimpleIconProps) {
  return (
    <span
      role="img"
      aria-label={icon.title}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        verticalAlign: "middle",
      }}
    />
  );
}
