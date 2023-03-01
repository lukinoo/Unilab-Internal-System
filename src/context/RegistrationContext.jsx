import { FormProvider, useForm } from "react-hook-form";
import { registrationSchema } from "../schemas/registration";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegistrationProvider = ({ children }) => {
  const methods = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "all",
    delayError: 500,
    defaultValues: {
      country_id: 1,
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
