namespace IButton {
  interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
  }
}

namespace ILink {
  interface Props {
    href: string;
    children: React.ReactNode;
  }
}