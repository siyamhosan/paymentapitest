import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { Payment } from "../payment/Payment";

export type Currency = {
  createdAt: Date;
  id: string;
  name: string | null;
  paymentMethods?: Array<PaymentMethod>;
  payments?: Array<Payment>;
  symbolField: string | null;
  updatedAt: Date;
};
