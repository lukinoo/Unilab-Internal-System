import { useState, useEffect } from "react";

export const useAutoClose = (ref, initialState, onClose) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }

    if (isOpen) {
      onClose();
    }

    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return [isOpen, setIsOpen];
};
