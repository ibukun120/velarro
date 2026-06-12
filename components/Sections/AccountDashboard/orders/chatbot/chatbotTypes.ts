export interface ChatMessage {
  id: number;
  sender: "user" | "bot";
  text: string;
}

export interface QuickQuestion {
  id: number;
  label: string;
  question: string;
}

export interface ChatReply {
  keywords: string[];
  reply: string;
}