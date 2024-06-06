import { MerchantWhereInput } from "./MerchantWhereInput";
import { MerchantOrderByInput } from "./MerchantOrderByInput";

export type MerchantFindManyArgs = {
  where?: MerchantWhereInput;
  orderBy?: Array<MerchantOrderByInput>;
  skip?: number;
  take?: number;
};
