import wordmark from "@/assets/novagentec-wordmark.png.asset.json";
import monogram from "@/assets/novagentec-monogram.png.asset.json";

export function LogoWordmark({ className, alt = "NOVAGENTEC" }: { className?: string; alt?: string }) {
  return <img src={wordmark.url} alt={alt} className={className} />;
}

export function LogoMonogram({ className, alt = "NOVAGENTEC" }: { className?: string; alt?: string }) {
  return <img src={monogram.url} alt={alt} className={className} />;
}

// Backwards-compat alias
export const LogoIcon = LogoMonogram;
