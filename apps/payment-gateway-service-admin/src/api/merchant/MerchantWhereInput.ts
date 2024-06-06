import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MerchantWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  username?: StringNullableFilter;
};
