import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
