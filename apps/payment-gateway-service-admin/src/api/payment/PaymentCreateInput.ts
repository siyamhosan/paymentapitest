import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { SmsCreateNestedManyWithoutPaymentsInput } from "./SmsCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  paymentMethod?: PaymentMethodWhereUniqueInput | null;
  smsItems?: SmsCreateNestedManyWithoutPaymentsInput;
  status?: "Option1" | null;
  trxId?: string | null;
};
