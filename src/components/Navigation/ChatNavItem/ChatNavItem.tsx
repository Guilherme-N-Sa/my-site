import React, { useEffect, useState } from 'react';
import { AiTag, StyledChatNavItem } from './styles';
import { ChatNavItemProps } from './types';

export default function ChatNavItem({ setIsChatOpen }: ChatNavItemProps) {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsChatOpen(true);

    const detailedInfo = document.querySelector('.detailed-info');
    if (detailedInfo) {
      detailedInfo.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  useEffect(() => {
    let count = 0;
    const triggerShake = () => {
      count++;
      if (count < 5) {
        setIsShaking(true);
        setTimeout(() => {
          setIsShaking(false);
        }, 400);
      }
    };

    triggerShake();

    const interval = setInterval(triggerShake, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledChatNavItem className={isShaking ? 'animate' : ''}>
      <a href="#" onClick={handleClick}>
        Chat with me
      </a>
      <AiTag>AI</AiTag>
    </StyledChatNavItem>
  );
}
