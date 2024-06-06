import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type SmsUpdateInput = {
  message?: string | null;
  payment?: PaymentWhereUniqueInput | null;
  receivedAt?: Date | null;
  senderPhoneNumber?: string | null;
};
