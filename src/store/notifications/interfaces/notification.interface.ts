export interface Notification {
  id: number;
  user: string;
  message: string;
  date: string;
  type: string;
  isRead: boolean;
}