import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: '16/9' | '4/3' | '3/2' | 'auto';
  hoverZoom?: boolean;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = 'auto',
  hoverZoom = false,
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-video'
      : aspectRatio === '4/3'
        ? 'aspect-[4/3]'
        : aspectRatio === '3/2'
          ? 'aspect-[3/2]'
          : '';

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[#132923]',
        aspectClass,
        containerClassName
      )}
    >
      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0E221D] via-[#16362E] to-[#1E4439] p-6 text-center text-[#F8F7F4]">
          <Building2 className="h-8 w-8 text-[#C98232]" aria-hidden="true" />
          <p className="font-serif text-sm text-white/85 max-w-xs">{alt}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={cn(
            'h-full w-full object-cover transition-transform duration-500 ease-out',
            hoverZoom && 'group-hover:scale-[1.03]',
            className
          )}
        />
      )}
    </div>
  );
}
