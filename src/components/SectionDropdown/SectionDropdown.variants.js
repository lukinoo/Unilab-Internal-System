export const dropdownVariants = {
  hidden: {
    opacity: 0,
    top: "50%",
    height: "0px",
    pointerEvents: "none",
    transition: {
      duration: 0.2,
      type: "spring",
      height: { delay: 0.2 },
    },
  },
  visible: {
    opacity: 1,
    top: "100%",
    height: "fit-content",
    pointerEvents: "all",
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};
