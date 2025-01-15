import React from 'react';
import { Nav } from './styles';
import { NavigationProps } from './types';

const defaultItems = [
  { label: 'About', href: '#' },
  { label: 'Experience', href: '#' },
  { label: 'Projects', href: '#' },
];

const Navigation: React.FC<NavigationProps> = ({ items = defaultItems }) => {
  return (
    <Nav>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Navigation; 