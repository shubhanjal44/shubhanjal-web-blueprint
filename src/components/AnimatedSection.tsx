import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up';
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';
    const durationClass = `duration-[${duration * 1000}ms]`;

    if (!hasAnimated) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} ${delayClass} ${durationClass} opacity-0 translate-y-8`;
        case 'fade-left':
          return `${baseClasses} ${delayClass} ${durationClass} opacity-0 -translate-x-8`;
        case 'fade-right':
          return `${baseClasses} ${delayClass} ${durationClass} opacity-0 translate-x-8`;
        case 'scale':
          return `${baseClasses} ${delayClass} ${durationClass} opacity-0 scale-95`;
        case 'slide-up':
          return `${baseClasses} ${delayClass} ${durationClass} opacity-0 translate-y-12`;
        default:
          return `${baseClasses} ${delayClass} ${durationClass} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} ${delayClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;