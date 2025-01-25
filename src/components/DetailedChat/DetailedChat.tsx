import { useEffect, useState } from 'react';
import { DetailedChatWrapper } from './styles';
import { Message } from './types';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import ChatInputContainer from './ChatInputContainer/ChatInputContainer';
import { handleMessageOperation, initializeChatHistory } from '../../services/chatService';

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);

  const handleSendMessage = async (message: string) => {
    setIsWaitingResponse(true);
    setMessages(prev => [...prev, { role: 'user', content: message } as Message]);

    try {
      const { assistantMessage } = await handleMessageOperation(message);
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsWaitingResponse(false);
    }
  };

  useEffect(() => {
    async function initializeChat() {
      try {
        const initializedMessages = await initializeChatHistory(INITIAL_MESSAGES);
        setMessages(initializedMessages);
      } catch (error) {
        console.error('Failed to initialize chat:', error);
        setMessages(INITIAL_MESSAGES);
      }
    }

    initializeChat();
  }, []);

  return (
    <DetailedChatWrapper>
      <MessagesContainer messages={messages} isWaitingResponse={isWaitingResponse} />
      <ChatInputContainer isWaitingResponse={isWaitingResponse} onSendMessage={handleSendMessage} />
    </DetailedChatWrapper>
  );
}
