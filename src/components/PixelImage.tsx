import { ImageProps } from "next/image";

export default function PixelImage({
  className,
  ...props
}: { 
  className?: string,
  props: ImageProps
}) {
  return <img {...props} className={`pixel-image ${className || ""}`} />;
}