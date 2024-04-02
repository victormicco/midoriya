import ky from "ky";

import { env } from "@/constants/env.mjs";

export const apiSqlValidator = ky.create({
  prefixUrl: env.NEXT_PUBLIC_SQL_VALIDATOR_BASE_URL,
  timeout: 180000,
});
