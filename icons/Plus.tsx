import { SvgProps } from "./icons";

export default function Plus({ className }: SvgProps) {
  return (
    <svg id="Layer_1" viewBox="0 0 512 512" className={className}>
      <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
    </svg>
  );
}
