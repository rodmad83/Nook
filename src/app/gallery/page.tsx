"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  // Gallery categories
  const categories = [
    { id: "all", name: "All" },
    { id: "classroom", name: "Classroom" },
    { id: "outdoor", name: "Outdoor" },
    { id: "events", name: "Events" },
    { id: "activities", name: "Activities" }
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://ext.same-assets.com/2311337494/1996272895.jpeg",
      alt: "Children playing in classroom",
      category: "classroom",
      caption: "Interactive learning activities in our bright classroom space"
    },
    {
      id: 2,
      src: "https://ext.same-assets.com/2311337494/2260353441.jpeg",
      alt: "Reception area of HEI Schools",
      category: "classroom",
      caption: "Our welcoming reception area designed with children in mind"
    },
    {
      id: 3,
      src: "https://ext.same-assets.com/2311337494/688566906.png",
      alt: "Children outdoor activity",
      category: "outdoor",
      caption: "Outdoor exploration and nature-based learning"
    },
    {
      id: 4,
      src: "https://ext.same-assets.com/2311337494/2577329229.png",
      alt: "Art activity",
      category: "activities",
      caption: "Creative expression through various art mediums"
    },
    {
      id: 5,
      src: "https://ext.same-assets.com/2311337494/2602122455.png",
      alt: "Special event celebration",
      category: "events",
      caption: "Celebrating cultural festivals and special events"
    },
    {
      id: 6,
      src: "https://ext.same-assets.com/2311337494/1858294502.png",
      alt: "Outdoor playground",
      category: "outdoor",
      caption: "Our playground encourages physical development and social interaction"
    },
    {
      id: 7,
      src: "https://ext.same-assets.com/2311337494/1136825076.png",
      alt: "Classroom learning",
      category: "classroom",
      caption: "Engaging learning environments promote curiosity and exploration"
    },
    {
      id: 8,
      src: "https://ext.same-assets.com/2311337494/301448538.webp",
      alt: "Science experiment",
      category: "activities",
      caption: "Hands-on science experiments foster critical thinking"
    },
    {
      id: 9,
      src: "https://ext.same-assets.com/2311337494/674448715.webp",
      alt: "Group activity",
      category: "activities",
      caption: "Collaborative projects develop teamwork and communication skills"
    },
    {
      id: 10,
      src: "https://ext.same-assets.com/2311337494/3100353215.webp",
      alt: "Annual day celebration",
      category: "events",
      caption: "Annual day performances showcase children's talents"
    },
    {
      id: 11,
      src: "https://ext.same-assets.com/2311337494/429277496.webp",
      alt: "Outdoor gardening",
      category: "outdoor",
      caption: "Learning about nature through gardening activities"
    },
    {
      id: 12,
      src: "https://ext.same-assets.com/2311337494/1109217790.webp",
      alt: "Music class",
      category: "activities",
      caption: "Music sessions enhance creativity and expression"
    }
  ];

  // State for filtering and lightbox
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  // Filter images based on active category
  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Open lightbox
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Navigate through images in lightbox
  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImage === null) return;

    if (direction === 'prev') {
      setCurrentImage(current =>
        current === 0 ? filteredImages.length - 1 : (current as number) - 1
      );
    } else {
      setCurrentImage(current =>
        current === filteredImages.length - 1 ? 0 : (current as number) + 1
      );
    }
  };

  // Handle keyboard navigation for lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!lightboxOpen) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      navigateImage('prev');
    } else if (e.key === "ArrowRight") {
      navigateImage('next');
    }
  };

  return (
    <div
      className="bg-hei-light py-16 md:py-24"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-caecilia text-hei-green text-center mb-6">
          Gallery
        </h1>

        <p className="text-center max-w-3xl mx-auto mb-10">
          Embark on a visual journey through Nook Junior School, discovering our engaging learning spaces, exciting activities, memorable events, and the dynamic educational environment we proudly offer our children.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md ${
                activeCategory === category.id
                  ? 'bg-hei-green text-white'
                  : 'bg-white text-hei-green hover:bg-hei-green/10'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full h-full p-4 flex flex-col items-center justify-center">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <div
                className="relative w-full max-h-[70vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[currentImage].src}
                  alt={filteredImages[currentImage].alt}
                  width={1200}
                  height={800}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              {/* Caption */}
              <div className="text-white text-center mt-4 max-w-3xl">
                <p className="text-lg">{filteredImages[currentImage].caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
