namespace ICarousel {
  interface Props {
    children: React.ReactNode
    options?: EmblaOptionsType
  }
  
  interface ButtonProps {
    selected: boolean;
    onClick: () => void;
  };
}
