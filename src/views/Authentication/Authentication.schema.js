import * as z from "zod";

export const schema = z.object({
  email: z.string().email({ message: "არასწორი მეილი" }).max(320),
  password: z
    .string()
    .min(6, { message: "პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან" })
    .max(128, {
      message: "პაროლი უნდა შედგებოდეს მაქსიმუმ 128 სიმბოლოსგან",
    }),
  remember: z.boolean(),
});
