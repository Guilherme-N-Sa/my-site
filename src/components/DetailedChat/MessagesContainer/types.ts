import { Message } from '../types';

export interface MessagesContainerProps {
  messages: Message[];
  isWaitingResponse: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}
