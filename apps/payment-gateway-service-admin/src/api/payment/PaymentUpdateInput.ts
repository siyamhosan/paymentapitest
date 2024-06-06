import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { SmsUpdateManyWithoutPaymentsInput } from "./SmsUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  paymentMethod?: PaymentMethodWhereUniqueInput | null;
  smsItems?: SmsUpdateManyWithoutPaymentsInput;
  status?: "Option1" | null;
  trxId?: string | null;
};
