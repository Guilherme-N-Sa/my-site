import { useState, useEffect } from 'react';
import { Wrapper, RadialGradient } from './styles';
import { LayoutProps } from './types';

export default function Layout({ children }: LayoutProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <RadialGradient x={mousePosition.x} y={mousePosition.y} />
      {children}
    </Wrapper>
  );
}
