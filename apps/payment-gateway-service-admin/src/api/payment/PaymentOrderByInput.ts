import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  paymentMethodId?: SortOrder;
  status?: SortOrder;
  trxId?: SortOrder;
  updatedAt?: SortOrder;
};
