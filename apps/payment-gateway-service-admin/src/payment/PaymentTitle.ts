import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "trxId";

export const PaymentTitle = (record: TPayment): string => {
  return record.trxId?.toString() || String(record.id);
};
