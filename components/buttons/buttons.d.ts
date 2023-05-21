interface Button {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}
