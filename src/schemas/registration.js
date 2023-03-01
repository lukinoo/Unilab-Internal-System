import * as z from "zod";
import { spaceRemover, requiredStr } from "../utils/schema";

const baseSchema = z.object({
  name: requiredStr("სახელი აუცილებელია"),
  lastname: requiredStr("გვარი აუცილებელია"),
  personal_id: requiredStr("პირადი ნომერი აუცილებელია")
    .regex(new RegExp("^[0-9]*$"), {
      message: "პირადი ნომერი უნდა შედგებოდეს მხოლოდ ციფრებისგან",
    })
    .length(11, {
      message: "პირადი ნომერი უნდა შედგებოდეს ზუსტად 11 რიცხვისგან",
    }),
  email: requiredStr("ელ-ფოსტა აუცილებელია").email({
    message: "არასწორი მეილი",
  }),
  password: requiredStr("პაროლი აუცილებელია").min(6, {
    message: "პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან",
  }),
  conf_password: requiredStr("პაროლის გამეორება აუცილებელია").min(6, {
    message: "პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან",
  }),
  number: requiredStr("მობილურის ნომერი აუცილებელია")
    .regex(/^[\d ]+$/, { message: "არასწორი ნომერი" })
    .transform(spaceRemover),
  date: requiredStr("დაბადების თარიღი აუცილებელია").datetime(),
  gender: requiredStr("აირჩიეთ სქესი"),
  country_id: z.coerce.number({ invalid_type_error: "აირჩიეთ ქვეყანა" }),
  region_id: z.coerce.number({ invalid_type_error: "აირჩიეთ რეგიონი" }),
  city_id: z.coerce.number({ invalid_type_error: "აირჩიეთ ქალაქი" }),
  address: requiredStr("სრული მისამართი აუცილებელია"),
  terms: z.literal(true, {
    errorMap: () => ({
      message:
        "რეგისტრაციისთვის დაეთანხმეთ მოხმარების წესებსა და კონფიდენციალურობის პოლიტიკას",
    }),
  }),
});

const schoolSchema = baseSchema.extend({
  school: requiredStr("სკოლის ნომერი აუცილებელია"),
  grade: requiredStr("აირჩიეთ კლასი"),
  parent_name: requiredStr("მშობლის სახელი აუცილებელია"),
  parent_lastname: requiredStr("მშობლის გვარი აუცილებელია"),
  parent_number: requiredStr("მშობლის მობილურის ნომერი აუცილებელია")
    .regex(/^[\d ]+$/, { message: "არასწორი ნომერი" })
    .transform(spaceRemover),
  role: z.literal("1"),
});

const universitySchema = baseSchema.extend({
  university: requiredStr("აირჩიეთ უნივერსიტეტი"),
  faculty: requiredStr("ფაკულტეტი აუცილებელია"),
  program: requiredStr("პროგრამა აუცილებელია"),
  degree: z.enum(["bachelors", "masters"], {
    invalid_type_error: "აირჩიეთ ან ბაკალავრი ან მაგისტრატურა",
  }),
  semester: requiredStr("აირჩიეთ სემესტრი"),
  role: z.literal("2"),
});

const otherSchema = baseSchema.extend({
  role: z.enum(["3", "4", undefined], { required_error: "აირჩიეთ სტატუსი" }),
});

export const registrationSchema = z
  .discriminatedUnion("role", [schoolSchema, universitySchema, otherSchema])
  .refine(({ password, conf_password }) => password === conf_password, {
    message: "პაროლები არ ემთხვევა",
    path: ["conf_password"],
  });
