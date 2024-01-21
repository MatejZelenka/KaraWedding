import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';


export const swiper = () => {
  return new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    effect: 'fade',
    autoplay: {delay: 5000},
    direction: 'horizontal',
    initialSlide: 0,
    loop: true,
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: "bullets",
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};
