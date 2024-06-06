import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type PaymentMethodWhereInput = {
  currency?: CurrencyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  smsExtractor?: StringNullableFilter;
};
