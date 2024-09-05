export interface INotification {
  content: any;
  duration: number;
  message: string;
  show: boolean;
  type: 'error' | 'success';
}
