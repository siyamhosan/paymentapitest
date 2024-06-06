import { PaymentMethodCreateNestedManyWithoutCurrenciesInput } from "./PaymentMethodCreateNestedManyWithoutCurrenciesInput";
import { PaymentCreateNestedManyWithoutCurrenciesInput } from "./PaymentCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  name?: string | null;
  paymentMethods?: PaymentMethodCreateNestedManyWithoutCurrenciesInput;
  payments?: PaymentCreateNestedManyWithoutCurrenciesInput;
  symbolField?: string | null;
};
