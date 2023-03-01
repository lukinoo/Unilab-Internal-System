import React from "react";
import { Input } from "../Input";

export const NumberInput = (props) => {
  const handleOnChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return <Input {...props} type={"text"} onChange={handleOnChange} />;
};
