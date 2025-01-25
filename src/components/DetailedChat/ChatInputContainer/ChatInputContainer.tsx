import { useRef, useEffect } from 'react';
import { Container, ChatInput, SendButton } from './styles';
import { ChatInputContainerProps } from './types';

export default function ChatInputContainer({
  isWaitingResponse,
  onSendMessage,
}: ChatInputContainerProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    };

    textarea.addEventListener('input', adjustHeight);
    return () => textarea.removeEventListener('input', adjustHeight);
  }, []);

  const handleSendMessage = () => {
    const message = inputRef.current?.value.trim();
    if (!message || isWaitingResponse) return;

    onSendMessage(message);

    // Clear input and reset height
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isWaitingResponse) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container>
      <ChatInput
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder="Type your question..."
        rows={1}
        disabled={isWaitingResponse}
      />
      <SendButton onClick={handleSendMessage} disabled={isWaitingResponse}>
        Send
      </SendButton>
    </Container>
  );
}
