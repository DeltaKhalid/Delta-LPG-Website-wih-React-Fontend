// FadeUpTrigger.jsx
import { useEffect } from 'react';

const FadeUpTrigger = () => {
  useEffect(() => {
    const divs = document.querySelectorAll('.divFadeUp');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    });

    divs.forEach((div) => observer.observe(div));

    return () => {
      divs.forEach((div) => observer.unobserve(div));
    };
  }, []);

  return null; // This component does not render anything
};

export default FadeUpTrigger;
