export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  created_at: number;
  id: string;
}

export interface Thread {
  thread_id: string;
  created_at: string;
  updated_at: string;
}

export interface SendMessageRequest {
  message: string;
  thread_id?: string;
}

export interface SendMessageResponse {
  thread: Thread;
  response: string;
}

export type GetThreadHistoryResponse = Message[];
