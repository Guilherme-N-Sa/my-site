import { useRef, useState, useEffect } from 'react';
import { DetailedChatWrapper, InputContainer, ChatInput, SendButton } from './styles';
import { Message } from './types';
import MessagesContainer from './MessagesContainer/MessagesContainer';

// Mocked initial messages
const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content:
      'Hello my name is Guilherme! I am a virtual assistant powered by a RAG model that uses the knowledge of my background history to answer your questions.',
  },
  {
    role: 'assistant',
    content: 'What do you want to know about me?',
  },
];

export default function DetailedChat() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const isOverflowing = container.scrollHeight > container.clientHeight;
    if (isOverflowing) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    };

    textarea.addEventListener('input', adjustHeight);
    return () => textarea.removeEventListener('input', adjustHeight);
  }, []);

  // Send message
  const handleSendMessage = () => {
    const message = inputRef.current?.value.trim();
    if (!message || isWaitingResponse) return;

    setIsWaitingResponse(true);

    setMessages(prev => [...prev, { role: 'user', content: message } as Message]);

    // Clear input and reset height
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.style.height = 'auto';
    }

    // Mock assistant response (you'll replace this with actual API call)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `I received your message: "${message}". This is a mocked response.`,
        },
      ]);
      setIsWaitingResponse(false);
    }, 1000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isWaitingResponse) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <DetailedChatWrapper>
      <MessagesContainer
        messages={messages}
        isWaitingResponse={isWaitingResponse}
        containerRef={messagesContainerRef}
      />
      <InputContainer>
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
      </InputContainer>
    </DetailedChatWrapper>
  );
}
