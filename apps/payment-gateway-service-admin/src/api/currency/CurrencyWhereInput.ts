import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentMethodListRelationFilter } from "../paymentMethod/PaymentMethodListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type CurrencyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentMethods?: PaymentMethodListRelationFilter;
  payments?: PaymentListRelationFilter;
  symbolField?: StringNullableFilter;
};
