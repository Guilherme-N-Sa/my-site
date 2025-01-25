import React from 'react';
import { Nav } from './styles';
import { NavigationProps, NavItem } from './types';
import ChatNavItem from './ChatNavItem/ChatNavItem';

export default function Navigation({ items, setIsChatOpen }: NavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setIsChatOpen(false);

    item.onClick?.();

    const detailedInfo = document.querySelector('.detailed-info');
    if (detailedInfo) {
      detailedInfo.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Nav>
      <ul>
        {items?.map(item => (
          <li key={item.label}>
            <a href={item.href} onClick={e => handleClick(e, item)}>
              {item.label}
            </a>
          </li>
        ))}
        <ChatNavItem setIsChatOpen={setIsChatOpen} />
      </ul>
    </Nav>
  );
}
