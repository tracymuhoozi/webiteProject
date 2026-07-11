import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';
import { Link } from "react-router-dom";

const Carousel = ({ slides, autoPlayInterval = 5000 }) => {
  // Default slides using your images
  const defaultSlides = [
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    caption: {
      title: "Save Today. Shine Tomorrow.",
      description:
        "Every small saving is a step toward achieving your dreams. Start your financial journey with confidence."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    caption: {
      title: "Growing Wealth, Together",
      description:
        "Enjoy flexible savings plans, affordable loans, and investment opportunities designed to help you prosper"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    caption: {
      title: "Empowering Communities Through Unity",
      description:
        "When we save, support, and grow together, every member has the opportunity to succeed."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    caption: {
      title: "Your Future Begins Here",
      description:
        "Join thousands of members creating brighter financial futures through smart saving and responsible borrowing."
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
      Welcome to ShineUp Sacco
    </span>

    <h1>{slide.caption.title}</h1>

    <p>{slide.caption.description}</p>

    <div className="hero-buttons">

      <Link to="/services" className='primary-btn'>

          explore services
        
      </Link>
      
      <Link to="/apply" className='secondary-btn'>
            Apply now
    
      </Link>


      
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