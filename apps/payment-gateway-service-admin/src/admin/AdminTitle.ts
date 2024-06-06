import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "username";

export const AdminTitle = (record: TAdmin): string => {
  return record.username?.toString() || String(record.id);
};
