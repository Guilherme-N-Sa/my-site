const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const CHAT_ENDPOINTS = {
  history: (threadId: string) => `${API_BASE_URL}/chat/${threadId}/history/`,
  send: `${API_BASE_URL}/chat/send/`,
} as const;
