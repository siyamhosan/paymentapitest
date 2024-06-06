import { PaymentMethod as TPaymentMethod } from "../api/paymentMethod/PaymentMethod";

export const PAYMENTMETHOD_TITLE_FIELD = "name";

export const PaymentMethodTitle = (record: TPaymentMethod): string => {
  return record.name?.toString() || String(record.id);
};
