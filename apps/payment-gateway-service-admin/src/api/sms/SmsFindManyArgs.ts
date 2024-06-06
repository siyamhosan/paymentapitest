import { SmsWhereInput } from "./SmsWhereInput";
import { SmsOrderByInput } from "./SmsOrderByInput";

export type SmsFindManyArgs = {
  where?: SmsWhereInput;
  orderBy?: Array<SmsOrderByInput>;
  skip?: number;
  take?: number;
};
