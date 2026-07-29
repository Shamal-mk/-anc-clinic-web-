import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import Lightbox from '../components/Lightbox';

interface LightboxContextType {
  openLightbox: (src: string) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setCurrentImage(src);
  const closeLightbox = () => setCurrentImage(null);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <Lightbox src={currentImage} onClose={closeLightbox} />
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('useLightbox must be used within a LightboxProvider');
  return context;
};
