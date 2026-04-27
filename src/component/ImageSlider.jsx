// src/components/ImageSlider.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { fetchHomeSlider } from '../api/apiCall';
import Urls from '../constants/urls';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSlider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) return <p>Loading slider...</p>;

  return (
    <div className="slider-container" style={{ width: '100%', height: '500px' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        style={{ height: '100%' }}
      >
        {slides.map((slider, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer-three"
              style={{
                backgroundImage: `url(${Urls.baseUrl}${slider.slider_img})`,
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
