import { Merchant as TMerchant } from "../api/merchant/Merchant";

export const MERCHANT_TITLE_FIELD = "username";

export const MerchantTitle = (record: TMerchant): string => {
  return record.username?.toString() || String(record.id);
};
