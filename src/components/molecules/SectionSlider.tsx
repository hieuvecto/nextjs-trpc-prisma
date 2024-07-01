import { FunctionComponent, ReactNode } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

type Props = {
  children: ReactNode;
};

const SectionSlider: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-gray-400',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
        }}
        autoplay={{ delay: 5000 }}
      >
        {children}
      </Swiper>
      <div className="swiper-pagination bg-gray-400 bg-opacity-35 backdrop-blur-sm rounded-full mx-auto !w-fit right-0 flex items-center justify-center p-1"></div>
    </div>
  );
};

export default SectionSlider;
