import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SmsWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  payment?: PaymentWhereUniqueInput;
  receivedAt?: DateTimeNullableFilter;
  senderPhoneNumber?: StringNullableFilter;
};
