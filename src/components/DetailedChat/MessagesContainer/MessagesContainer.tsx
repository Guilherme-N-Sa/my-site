import { Container, MessageBubble } from './styles';
import { MessagesContainerProps } from './types';

export default function MessagesContainer({
  messages,
  isWaitingResponse,
  containerRef,
}: MessagesContainerProps) {
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
