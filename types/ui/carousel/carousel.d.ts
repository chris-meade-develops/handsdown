namespace ICarousel {
  interface Props {
    children: React.ReactNode
    options?: EmblaOptionsType
    displayButtons?: boolean
    displayDots?: boolean
    selectableChildren?: boolean
    reverseColors?: boolean
  }
  
  interface ButtonProps {
    selected: boolean;
    onClick: () => void;
  };

  interface ArrowButton extends Pick<Props, "reverseColors"> {
    type: "next" | "prev"
    onClick: () => void
  }
}
