import { ImageProps } from "next/image";

export default function PixelImage({
  ...props
}: { 
  props: ImageProps
}) {
  return <img className="pixel-image" {...props} />;
}