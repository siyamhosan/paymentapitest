import { PaymentMethodUpdateManyWithoutCurrenciesInput } from "./PaymentMethodUpdateManyWithoutCurrenciesInput";
import { PaymentUpdateManyWithoutCurrenciesInput } from "./PaymentUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  name?: string | null;
  paymentMethods?: PaymentMethodUpdateManyWithoutCurrenciesInput;
  payments?: PaymentUpdateManyWithoutCurrenciesInput;
  symbolField?: string | null;
};
