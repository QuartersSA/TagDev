export interface Invoice {
  id: string;
  number: string;
  customerId?: string;
  customerName: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: 'cash' | 'card' | 'mada' | 'stcpay';
  status: 'paid' | 'pending' | 'refunded';
  createdAt: string;
}

export interface InvoiceItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}
