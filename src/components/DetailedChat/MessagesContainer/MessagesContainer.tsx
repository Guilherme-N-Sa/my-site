import { useRef, useEffect } from 'react';
import { Container, MessageBubble } from './styles';
import { MessagesContainerProps } from './types';

export default function MessagesContainer({ messages, isWaitingResponse }: MessagesContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const container = containerRef.current;
    if (!container) return;

    const isOverflowing = container.scrollHeight > container.clientHeight;
    if (isOverflowing) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Container ref={containerRef}>
      {messages.map(
        (message, index) =>
          message.role !== 'system' && (
            <MessageBubble key={index} sender={message.role === 'user' ? 'user' : 'bot'}>
              {message.content}
            </MessageBubble>
          )
      )}
      {isWaitingResponse && <MessageBubble sender="typing">Guilherme is typing...</MessageBubble>}
    </Container>
  );
}
