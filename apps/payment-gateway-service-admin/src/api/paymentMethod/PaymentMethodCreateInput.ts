import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { PaymentCreateNestedManyWithoutPaymentMethodsInput } from "./PaymentCreateNestedManyWithoutPaymentMethodsInput";

export type PaymentMethodCreateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutPaymentMethodsInput;
  smsExtractor?: string | null;
};
