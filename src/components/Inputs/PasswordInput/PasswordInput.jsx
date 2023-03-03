import React, { useState } from "react";
import { Eye } from "./Eye";
import { Input } from "../Input";

export const PasswordInput = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Input
      {...props}
      type={isPasswordVisible ? "text" : "password"}
      RightComponent={
        <Eye
          isPasswordVisible={isPasswordVisible}
          onClick={handleVisibilityToggle}
        />
      }
    />
  );
};
