import { Message } from '../components/DetailedChat/types';
import { CHAT_ENDPOINTS } from './api';
import type { GetThreadHistoryResponse, SendMessageRequest, SendMessageResponse } from './types';

/**
 * Fetches the chat history for a specific thread
 * @param threadId - The ID of the thread to fetch history for
 * @returns Promise with the thread history
 */
export async function getChatHistory(threadId: string): Promise<GetThreadHistoryResponse> {
  try {
    const response = await fetch(CHAT_ENDPOINTS.history(threadId));

    if (!response.ok) {
      throw new Error(`Failed to fetch chat history: ${response.statusText}`);
    }

    const data = await response.json();

    const dataFormatted = data
      .map((message: Message) => ({
        role: message.role,
        content: message.content,
      }))
      .reverse();

    return dataFormatted;
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw error;
  }
}

/**
 * Sends a message to the chat
 * @param params - Object containing the message and optional thread_id
 * @returns Promise with the response containing the message and thread_id
 */
export async function sendMessage(params: SendMessageRequest): Promise<SendMessageResponse> {
  try {
    const response = await fetch(CHAT_ENDPOINTS.send, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

/**
 * Handles the complete message operation including sending and thread management
 * @param message - The message to be sent
 * @returns Promise with the formatted message response and updated messages
 */
export async function handleMessageOperation(message: string): Promise<{
  assistantMessage: Message;
  threadId: string;
}> {
  const threadId = localStorage.getItem('threadId') || '';

  const response = await sendMessage({
    message,
    thread_id: threadId,
  });

  localStorage.setItem('threadId', response.thread.thread_id);

  return {
    assistantMessage: {
      role: 'assistant',
      content: response.message,
    },
    threadId: response.thread.thread_id,
  };
}

/**
 * Initializes or retrieves the chat history
 * @param initialMessages - Default messages to show when there's no history
 * @returns Promise with the chat history or initial messages
 */
export async function initializeChatHistory(initialMessages: Message[]): Promise<Message[]> {
  const threadId = localStorage.getItem('threadId');

  if (!threadId) {
    return initialMessages;
  }

  try {
    const messages = await getChatHistory(threadId);

    if (messages.length === 0) {
      localStorage.removeItem('threadId');
      return initialMessages;
    }

    return messages;
  } catch (error) {
    console.error('Failed to fetch chat history:', error);
    localStorage.removeItem('threadId');
    return initialMessages;
  }
}
