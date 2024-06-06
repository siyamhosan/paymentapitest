import { SortOrder } from "../../util/SortOrder";

export type PaymentMethodOrderByInput = {
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  smsExtractor?: SortOrder;
  updatedAt?: SortOrder;
};
