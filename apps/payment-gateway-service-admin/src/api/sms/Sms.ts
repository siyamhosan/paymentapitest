import { Payment } from "../payment/Payment";

export type Sms = {
  createdAt: Date;
  id: string;
  message: string | null;
  payment?: Payment | null;
  receivedAt: Date | null;
  senderPhoneNumber: string | null;
  updatedAt: Date;
};
