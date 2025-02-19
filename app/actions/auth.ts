"use server";

import { decodeJwtToken } from "../../utils/helper/auth";
import { checkUserExists } from "./db";

export async function isAuthencticated(authToken: string) {
  const userPayload = decodeJwtToken(authToken);

  if (!userPayload || !(await checkUserExists(userPayload.email))) {
    return null;
  }

  return userPayload.userId;
}
