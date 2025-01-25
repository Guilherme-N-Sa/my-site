import { Message } from '../types';

export interface MessagesContainerProps {
  messages: Message[];
  isWaitingResponse: boolean;
}
