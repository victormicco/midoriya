import { type Options } from "ky";
import { apiSqlValidator } from "../../lib/ky";

export const toolService = {
  async checkSqlCode(code?: string, signal?: any) {
    const response = await apiSqlValidator.post("sql-syntax-tester", {
      timeout: false,
      signal,
      body: code,
    });
    console.log(response);
    return "teste";
  },
};
