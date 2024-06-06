import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { SmsListRelationFilter } from "../sms/SmsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  paymentMethod?: PaymentMethodWhereUniqueInput;
  smsItems?: SmsListRelationFilter;
  status?: "Option1";
  trxId?: StringNullableFilter;
};
