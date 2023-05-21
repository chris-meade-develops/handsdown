import { useState } from "react";

type Toggle = {
  initial?: boolean;
};

export default function useToggle({ initial }: Toggle) {
  const [open, setOpen] = useState(initial || false);

  const toggle = () => setOpen(!open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { open, toggle, handleOpen, handleClose };
}
