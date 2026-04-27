// hooks/onScrellActive.js
import { useEffect, useRef, useState } from "react";

export const useScrellActive = () => {

      const ref = useRef(null);
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible(entry.isIntersecting),
          { threshold: 0.1 }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);


//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const onScrellActive = () => {
//     const element = ref.current;
//     if (!element) return;

//     const rect = element.getBoundingClientRect();
//     const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

//     if (inView) {
//       setIsVisible(true);
//     }
//   };

//   useEffect(() => {
//     onScrellActive(); // check once at load
//     window.addEventListener("scroll", onScrellActive);
//     return () => window.removeEventListener("scroll", onScrellActive);
//   }, []);

//   return { ref, isVisible };

};
