import * as z from "zod";

export const requiredStr = (errorMessage) => {
  const msg = errorMessage || "ეს ველი აუცილებელია";
  return z.string({ required_error: msg }).trim().min(1, { message: msg });
};

export const spaceRemover = (str) => {
  return str.replace(/\s/g, "");
};
