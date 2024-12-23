import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselImage = styled.img`
  width: 50%;
  max-height: 570px;
  flex-shrink: 0;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin: 10px;
`;

const CarouselButtons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const CarouselButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const images = [
    'img/detail_1.png',
    'img/detail_2.png',
    'img/detail_3.png',
    'img/detail_4.png',
    'img/detail_5.png',
    'img/palour.png',
    
];

const Carousel = () => {
  const [counter, setCounter] = useState(0);

  const nextSlide = () => {
    setCounter((prevCounter) => (prevCounter >= images.length - 2 ? 0 : prevCounter + 1));
  };

  const prevSlide = () => {
    setCounter((prevCounter) => (prevCounter <= 0 ? images.length - 2 : prevCounter - 1));
  };

  useEffect(() => {
    const updateSize = () => {
      const size = document.querySelector('.carousel-slide img').clientWidth;
      document.querySelector('.carousel-slide').style.transform = 'translateX(' + (-size * counter) + 'px)';
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [counter]);

  return (
    <CarouselContainer>
      <CarouselSlide className="carousel-slide" style={{ transform: `translateX(${-counter * 50}%)` }}>
        {images.map((src, index) => (
          <CarouselImage key={index} src={src} alt={`Images ${index + 1}`} />
        ))}
      </CarouselSlide>
      <CarouselButtons>
        <CarouselButton onClick={prevSlide}>❮</CarouselButton>
        <CarouselButton onClick={nextSlide}>❯</CarouselButton>
      </CarouselButtons>
    </CarouselContainer>
  );
};

export default Carousel;
