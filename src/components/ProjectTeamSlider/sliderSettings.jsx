import { CustomChevronRight, CustomChevronLeft } from "./CustomChevrons/CustomChevrons";

export const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 0,
  prevArrow: <CustomChevronLeft />,
  nextArrow: <CustomChevronRight />,
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