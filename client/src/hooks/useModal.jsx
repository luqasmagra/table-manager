import { useState } from "react";

export default function useModal() {
  const [open, setOpen] = useState(false);

  const handleOnClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return {
    open,
    handleOnClose,
    handleOpen,
  };
}
