export interface ContactLink {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    value: string;
    href: string;
    color: string;
  }
  
  export interface ChatMessage {
    id: number;
    text: string;
    time: string;
    isFromUser: boolean;
    delay?: number;
  }
    