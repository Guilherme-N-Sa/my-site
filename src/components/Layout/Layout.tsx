import React, { useState, useEffect } from 'react';
import { Wrapper, GeneralInfo, RadialGradient } from './styles';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <RadialGradient x={mousePosition.x} y={mousePosition.y} />
      <GeneralInfo>
        {children}
      </GeneralInfo>
    </Wrapper>
  );
};

export default Layout; 