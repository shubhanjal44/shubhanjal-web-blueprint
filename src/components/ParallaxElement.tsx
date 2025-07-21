import { useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Calculate parallax offset
    const offset = (scrollY - elementTop + windowHeight) * speed;

    let transform = '';
    switch (direction) {
      case 'up':
        transform = `translateY(${-offset}px)`;
        break;
      case 'down':
        transform = `translateY(${offset}px)`;
        break;
      case 'left':
        transform = `translateX(${-offset}px)`;
        break;
      case 'right':
        transform = `translateX(${offset}px)`;
        break;
    }

    element.style.transform = transform;
  }, [scrollY, speed, direction]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default ParallaxElement;