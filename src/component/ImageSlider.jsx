// src/components/ImageSlider.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { fetchHomeSlider } from '../api/apiCall';
import Urls from '../constants/urls';
import Loader from './Loader';
import { getPreloadedApiData, hasSitePreloadCompleted } from '../api/startupLoader';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSlider = () => {
  const preloadedSlides = getPreloadedApiData('homeSlider');
  const [slides, setSlides] = useState(preloadedSlides ?? []);
  const [loading, setLoading] = useState(() => (!preloadedSlides || preloadedSlides.length === 0) && !hasSitePreloadCompleted());

  useEffect(() => {
    if (preloadedSlides && preloadedSlides.length > 0) {
      setLoading(false);
      return;
    }

    const getSliderImages = async () => {
      try {
        const data = await fetchHomeSlider();
        setSlides(data);
      } catch (error) {
        console.error('Error loading slider images:', error);
      } finally {
        setLoading(false);
      }
    };

    getSliderImages();
  }, []);

  if (loading) return <Loader label="" fullscreen={false} />;

  return (
    <div className="slider-container home-slider" style={{ width: '100%', height: '500px' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="home-slider__swiper"
        loop={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        watchOverflow={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slider, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer-three"
              style={{
                backgroundImage: `url(${Urls.buildMediaUrl(slider.slider_img)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;





/// ======================================================== Old Code ================================================= ///
// src/components/ImageSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const slides = [
//   'src/assets/images/backgrounds/slider_image_021.jpg',
//   'src/assets/images/backgrounds/slider_image_20.png',
//   'src/assets/images/backgrounds/slider_image_0017.jpg',
// ];

// const ImageSlider = () => {
//   return (
//     <div className="slider-container" style={{ width: '100%', height: '500px' }}>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         pagination={{ clickable: true }}
//         navigation
//         style={{ height: '100%' }}
//       >
//         {slides.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="image-layer-three"
//               style={{
//                 backgroundImage: `url(${img})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 width: '100%',
//                 height: '100%',
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;
