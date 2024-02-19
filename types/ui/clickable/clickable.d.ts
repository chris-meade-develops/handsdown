namespace IButton {
  interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
  }
}

namespace ILink {
  interface Props {
    href: string;
    children: React.ReactNode;
  }
}