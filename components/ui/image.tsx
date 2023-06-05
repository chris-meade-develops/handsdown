"use client";
import { default as NextImage } from "next/image";

interface iImage {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className }: iImage) {
  return (
    <div className="w-full">
      <NextImage
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "contain",
        }}
        className={className}
      />
    </div>
  );
}
