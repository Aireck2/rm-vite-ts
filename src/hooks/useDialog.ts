import { useState } from "react";

export const useDialog = (initValue = false) => {
  const [open, setOpen] = useState(initValue);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return { open, handleClose, handleOpen, handleToggle };
};
