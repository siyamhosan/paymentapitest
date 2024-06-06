import { SortOrder } from "../../util/SortOrder";

export type SmsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  paymentId?: SortOrder;
  receivedAt?: SortOrder;
  senderPhoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
