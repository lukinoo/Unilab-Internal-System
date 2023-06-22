import React from 'react'
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows/CustomArrows';

export const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  
};