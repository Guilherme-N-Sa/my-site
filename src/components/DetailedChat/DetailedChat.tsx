import { useEffect, useState } from 'react';
import { DetailedChatWrapper } from './styles';
import { Message } from './types';
import MessagesContainer from './MessagesContainer/MessagesContainer';
import ChatInputContainer from './ChatInputContainer/ChatInputContainer';
import { getChatHistory, sendMessage } from '../../services/chatService';

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

    const response = await sendMessage({
      message,
      thread_id: localStorage.getItem('threadId') || '',
    });
    // improve this response.response and add a loading state and put this logic in a service
    setMessages(prev => [...prev, { role: 'assistant', content: response.response } as Message]);
    localStorage.setItem('threadId', response.thread.thread_id);
    setIsWaitingResponse(false);
  };

  useEffect(() => {
    async function getThreadHistory() {
      const threadId = localStorage.getItem('threadId');
      if (threadId) {
        const messages = await getChatHistory(threadId);
        if (messages.length > 0) {
          setMessages(messages);
          return;
        }
        localStorage.removeItem('threadId');
      }
      setMessages(INITIAL_MESSAGES);
    }
    getThreadHistory();
  }, []);

  return (
    <DetailedChatWrapper>
      <MessagesContainer messages={messages} isWaitingResponse={isWaitingResponse} />
      <ChatInputContainer isWaitingResponse={isWaitingResponse} onSendMessage={handleSendMessage} />
    </DetailedChatWrapper>
  );
}
