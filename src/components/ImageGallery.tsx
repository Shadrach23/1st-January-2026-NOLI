import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  className?: string;
}

const ImageGallery = ({ className = "" }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [
    { src: "/src/assets/IMG_8793.jpg", alt: "Church Service Moment 1" },
    { src: "/src/assets/IMG_8843.jpg", alt: "Church Service Moment 2" },
    { src: "/src/assets/IMG_8897.jpg", alt: "Church Service Moment 3" },
    { src: "/src/assets/IMG_8898.jpg", alt: "Church Service Moment 4" },
    { src: "/src/assets/IMG_8915.jpg", alt: "Community Outreach 1" },
    { src: "/src/assets/IMG_8941.jpg", alt: "Community Outreach 2" },
    { src: "/src/assets/IMG_8958.jpg", alt: "Community Outreach 3" },
    { src: "/src/assets/community.jpg", alt: "Community Fellowship" },
    { src: "/src/assets/church-hero.jpg", alt: "Church Building" },
  ];

  const openLightbox = (imageSrc: string) => {
    const index = allImages.findIndex(img => img.src === imageSrc);
    setCurrentImageIndex(index);
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? allImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === allImages.length - 1 ? 0 : prev + 1
      );
    }
    setSelectedImage(allImages[currentImageIndex].src);
  };

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {allImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-center px-2">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            
            <img
              src={selectedImage}
              alt={allImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-sm">{allImages[currentImageIndex].alt}</p>
              <p className="text-xs opacity-75">
                {currentImageIndex + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
