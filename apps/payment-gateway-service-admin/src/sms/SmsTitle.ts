import { Sms as TSms } from "../api/sms/Sms";

export const SMS_TITLE_FIELD = "senderPhoneNumber";

export const SmsTitle = (record: TSms): string => {
  return record.senderPhoneNumber?.toString() || String(record.id);
};
