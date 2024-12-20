import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarouselProps } from '@/utils/types';
import Image from 'next/image';


const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      };
      

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-2">
            <div className="relative w-full h-64 rounded-lg">
              <Image
                src={slide.imageSrc}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-lg font-semibold">{slide.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
