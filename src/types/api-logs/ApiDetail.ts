export interface ApiDetail {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  status: string;
  time: Date;
}