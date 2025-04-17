import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useMediaQuery } from '../../ui-layouts/hooks/use-media-query';
import { skillsAndTools } from '../Skills & Tools/data';

const images = skillsAndTools;
const ImageReveal2 = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [activeImage, setActiveImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef(null);
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;
    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;
    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);
  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);
  const handleImageHover = useCallback(
    (image) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );
  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);
  return (
    <div
      className="relative w-full min-h-fit bg-gray-950 max-w-[1440px] mx-auto"
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`p-4 cursor-pointer relative sm:flex sm:flex-row-reverse md:flex-row gap-6 items-center justify-between`}
          onMouseEnter={() => handleImageHover(image)}
        >
          {!isDesktop && (
            <img
              src={image?.src}
              className="hidden sm:block sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
              alt="mobileImg"
            />
          )}
          <h2
            className={`w-[1280px] text-white newFont md:text-5xl sm:text-2xl text-xl font-semibold sm:py-6 py-2 leading-[100%] relative ${
              activeImage?.id === image?.id
                ? 'mix-blend-difference z-20 text-gray-300'
                : 'text-gray-700'
            }`}
          >
            {image.alt}
            {/* <p className='text-base text-gray-700 leading-relaxed mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt accusantium aspernatur illum optio tempora aliquam officiis, corporis provident qui! Culpa qui ipsum veritatis rerum deserunt quidem, similique blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate nam nisi quibusdam sit debitis, fugiat dolorem </p> */}
          </h2>
          <img
            src="https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop"
            alt="https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop"
            className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md hidden md:block"
          />
        </div>
      ))}
      {isDesktop && activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className={`fixed dark:bg-gray-950 bg-white object-cover pointer-events-none z-10 w-[300px] h-[400px] rounded-lg`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
  );
};
export default ImageReveal2;
