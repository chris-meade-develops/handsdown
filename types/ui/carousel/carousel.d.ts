namespace ICarousel {
  interface Props {
    children: React.ReactNode
    options?: EmblaOptionsType
    displayButtons?: boolean
    displayDots?: boolean
  }
  
  interface ButtonProps {
    selected: boolean;
    onClick: () => void;
  };

  interface ArrowButton {
    type: "next" | "prev"
    onClick: () => void
  }
}
