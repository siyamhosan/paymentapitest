import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { PaymentUpdateManyWithoutPaymentMethodsInput } from "./PaymentUpdateManyWithoutPaymentMethodsInput";

export type PaymentMethodUpdateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutPaymentMethodsInput;
  smsExtractor?: string | null;
};
