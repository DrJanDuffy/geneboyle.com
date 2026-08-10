import Image from "next/image";
import type { GuideImage } from "@/lib/guides/media";

type EditorialMediaBandProps = {
  image: GuideImage;
  caption?: string;
  className?: string;
  priority?: boolean;
};

/** Full-bleed visual plane between editorial sections (Discovery Loop media rhythm). */
export default function EditorialMediaBand({
  image,
  caption,
  className = "",
  priority = false,
}: EditorialMediaBandProps) {
  return (
    <figure className={`relative w-full mb-16 ${className}`}>
      <div className="relative h-[42vw] min-h-[220px] max-h-[480px] overflow-hidden bg-ink">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="100vw"
          quality={58}
          className="object-cover object-center"
        />
      </div>
      {caption ? (
        <figcaption className="site-wrap mt-3 font-sans text-xs text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
