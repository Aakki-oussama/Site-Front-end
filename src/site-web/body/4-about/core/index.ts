import type { ReactNode } from 'react';

export interface Reason {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  border: string;
}
