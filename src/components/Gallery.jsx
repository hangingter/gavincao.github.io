import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // Array of gallery images with their details
  const galleryImages = [
    {
      id: 1,
      src: "/assets/images/gallery1.jpg", 
      alt: "Minimalist workspace with Mac",
      description: "Clean design workspace",
      width: "full" // full width image
    },
    {
      id: 2,
      src: "/assets/images/gallery2.jpg",
      alt: "Modern architecture detail",
      description: "Architectural elegance",
      width: "half" // half width image
    },
    {
      id: 3,
      src: "/assets/images/gallery3.jpg",
      alt: "Abstract art piece",
      description: "Creative expression",
      width: "half" // half width image
    },
    {
      id: 4,
      src: "/assets/images/gallery4.jpg",
      alt: "Product design concept",
      description: "Innovation in form",
      width: "third" // one-third width image
    },
    {
      id: 5,
      src: "/assets/images/gallery5.jpg",
      alt: "Nature and technology harmony",
      description: "Environmental integration",
      width: "third" // one-third width image
    },
    {
      id: 6,
      src: "/assets/images/gallery6.jpg",
      alt: "Typography experiment",
      description: "Visual communication",
      width: "third" // one-third width image
    }
  ];

  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle image click to open modal
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Show loading state until images are ready
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = galleryImages.map(img => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = img.src;
        });
      });

      await Promise.all(imagePromises);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Generate grid class based on image width
  const getGridClass = (width) => {
    switch (width) {
      case 'full': 
        return 'col-span-12 md:col-span-12 h-96';
      case 'half': 
        return 'col-span-12 md:col-span-6 h-80';
      case 'third': 
        return 'col-span-12 md:col-span-4 h-64';
      default: 
        return 'col-span-12 md:col-span-4 h-64';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 tracking-tight">Gallery</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A visual journey through design, innovation, and creativity
          </p>
        </div>

        {!isLoaded ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse text-gray-400">Loading gallery...</div>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className={`${getGridClass(image.width)} overflow-hidden relative group`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/800x600?text=${image.alt.replace(/ /g, '+')}`;
                  }}
                  onClick={() => openModal(image)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-light text-lg">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Modal for enlarged image view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={handleModalClick}
          >
            <div className="max-w-4xl max-h-screen flex flex-col">
              <div className="relative">
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-w-full max-h-[85vh] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/800x600?text=${selectedImage.alt.replace(/ /g, '+')}`;
                  }}
                />
                <div className="p-4 bg-black bg-opacity-70 text-white">
                  <p className="font-light text-xl">{selectedImage.description}</p>
                  <p className="text-sm text-gray-300 mt-2">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;