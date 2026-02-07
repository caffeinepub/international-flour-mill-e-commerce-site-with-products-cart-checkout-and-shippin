interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ResponsiveImage({ src, alt, className = '' }: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full h-full ${className}`}
    />
  );
}
