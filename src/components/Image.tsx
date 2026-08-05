import { useLightbox } from '../context/LightboxContext';
import type { ImgHTMLAttributes } from 'react';

export const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const { openLightbox } = useLightbox();

  return (
    <img
      loading="lazy"
      decoding="async"
      {...props}
      onClick={(e) => {
        if (props.src) {
          openLightbox(props.src);
        }
        if (props.onClick) {
          props.onClick(e);
        }
      }}
      className={`${props.className || ''} cursor-zoom-in`}
    />
  );
};
