import { Currency } from "../currency/Currency";
import { Payment } from "../payment/Payment";

export type PaymentMethod = {
  createdAt: Date;
  currency?: Currency | null;
  description: string | null;
  id: string;
  name: string | null;
  payments?: Array<Payment>;
  smsExtractor: string | null;
  updatedAt: Date;
};
