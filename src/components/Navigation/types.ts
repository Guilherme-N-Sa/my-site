export interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface NavigationProps {
  items?: NavItem[];
  setIsChatOpen: (isChatOpen: boolean) => void;
}
