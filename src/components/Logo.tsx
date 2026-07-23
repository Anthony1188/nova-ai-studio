import wordmark from "@/assets/novagentec-wordmark.png.asset.json";
import monogram from "@/assets/novagentec-monogram.png.asset.json";

export function LogoWordmark({
  className,
  alt = "NOVAGENTEC wordmark",
  decorative = false,
}: {
  className?: string;
  alt?: string;
  decorative?: boolean;
}) {
  return (
    <img
      src={wordmark.url}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      className={className}
    />
  );
}

export function LogoMonogram({
  className,
  alt = "NOVAGENTEC monogram",
  decorative = false,
}: {
  className?: string;
  alt?: string;
  decorative?: boolean;
}) {
  return (
    <img
      src={monogram.url}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      className={className}
    />
  );
}

// Backwards-compat alias
export const LogoIcon = LogoMonogram;
