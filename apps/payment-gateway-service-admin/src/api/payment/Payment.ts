import { Currency } from "../currency/Currency";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { Sms } from "../sms/Sms";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  currency?: Currency | null;
  id: string;
  paymentMethod?: PaymentMethod | null;
  smsItems?: Array<Sms>;
  status?: "Option1" | null;
  trxId: string | null;
  updatedAt: Date;
};
