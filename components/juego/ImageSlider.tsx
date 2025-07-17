"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider: React.FC<{ imagenes: string[] }> = ({ imagenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Resetear el índice si cambia la lista de imágenes
  useEffect(() => {
    setCurrentIndex(0);
  }, [imagenes]);

  useEffect(() => {
    if (imagenes.length === 0) return; // Evitar errores si no hay imágenes

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagenes, currentIndex]); // Dependencias corregidas

  const nextSlide = () => {
    if (imagenes.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }
  };

  const prevSlide = () => {
    if (imagenes.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto select-none"
      onContextMenu={(e) => e.preventDefault()} 
      style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none" }}
    >
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          {imagenes.length > 0 ? (
            <motion.img
              key={currentIndex}
              src={imagenes[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto rounded-2xl pointer-events-none"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()} 
            />
          ) : (
            <p className="text-white text-center p-4">No hay imágenes disponibles</p>
          )}
        </AnimatePresence>
      </div>

      {imagenes.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          >
            ▶
          </button>
        </>
      )}

      {imagenes.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {imagenes.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
