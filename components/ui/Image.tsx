"use client";
import { default as NextImage } from "next/image";

interface iImage {
  src: string;
  alt: string;
  className?: string;
  imgPosition?: string;
  cover?: boolean;
}

export default function Image({
  src,
  alt,
  className,
  imgPosition,
  cover,
}: iImage) {
  return (
    <NextImage
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: cover ? "cover" : "contain",
        objectPosition: imgPosition ? imgPosition : "center",
      }}
      className={className}
    />
  );
}
