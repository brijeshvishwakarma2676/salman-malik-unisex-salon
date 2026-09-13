import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import Lightbox from "./Lightbox";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (images.length === 0) {
    return (
      <p className="text-body text-ink/70">
        No photos in this category yet — call to ask what we have on hand.
      </p>
    );
  }

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {images.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group block w-full overflow-hidden rounded-media text-left focus-visible:outline-2 cursor-pointer"
            aria-label={`Open photo: ${item.image.alt}`}
          >
            <ImageWithFallback
              image={item.image}
              className="w-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
