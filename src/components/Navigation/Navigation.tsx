import React from "react";
import { Nav } from "./styles";
import { NavigationProps, NavItem } from "./types";

export default function Navigation({ items }: NavigationProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault();

    item.onClick?.();

    const detailedInfo = document.querySelector(".detailed-info");
    if (detailedInfo) {
      detailedInfo.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Nav>
      <ul>
        {items?.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
