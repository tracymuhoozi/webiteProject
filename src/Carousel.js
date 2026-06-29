import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const Carousel = ({ slides, autoPlayInterval = 5000 }) => {
  // Default slides using your images
  const defaultSlides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1770382881955-1436023dd952?w=1200",
    caption: {
      title: "Empowering Businesses Through Technology",
      description:
        "We provide innovative ICT solutions, software development, networking, cybersecurity and digital transformation."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1659080926109-2bfa668330c0?w=1200",
    caption: {
      title: "Professional Computer Networking",
      description:
        "Reliable network installation, maintenance and enterprise connectivity solutions."
    }
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?w=1200",
    caption: {
      title: "Software & Website Development",
      description:
        "Building modern websites and business systems that help organizations grow."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?w=1200",
    caption: {
      title: "Training Future ICT Professionals",
      description:
        "Equipping students and professionals with practical digital skills."
    }
  }
];  const effectiveSlides = slides && slides.length > 0 ? slides : defaultSlides;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = effectiveSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // No slides fallback (should never happen because we have defaults)
  if (totalSlides === 0) {
    return <div className="carousel-empty">No slides available</div>;
  }

  return (
    <div
      className="carousel"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="carousel-slides">
        {effectiveSlides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img src={slide.image} alt={slide.caption?.title || `Slide ${index + 1}`} />
            {slide.caption && (
  <div className="carousel-caption">
    <span className="welcome-badge">
      Welcome to Stratcom Communications
    </span>

    <h1>{slide.caption.title}</h1>

    <p>{slide.caption.description}</p>

    <div className="hero-buttons">
      <button className="primary-btn">
        Explore Services
      </button>

      <button className="secondary-btn">
        Contact Us
      </button>
    </div>
  </div>
)}
          </div>
        ))}
      </div>

      <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
        &#10095;
      </button>

      <div className="carousel-dots">
        {effectiveSlides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;