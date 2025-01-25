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
