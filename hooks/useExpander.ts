import { useState, useRef, useEffect, RefObject } from "react";

interface UseExpanderReturn<T extends HTMLElement> {
  ref: RefObject<T>;
  isExpanded: boolean;
  handleToggle: () => void;
  maxHeight: string;
}

export default function useExpander<T extends HTMLElement>(
  initialState: boolean = false
): UseExpanderReturn<T> {
  const ref = useRef<T>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(initialState);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (ref.current) {
      let totalHeight = ref.current.scrollHeight;
      Array.from(ref.current.children).forEach((child) => {
        const style = getComputedStyle(child as HTMLElement);
        totalHeight +=
          (child as HTMLElement).scrollHeight +
          parseInt(style.marginTop) +
          parseInt(style.marginBottom);
      });
      setMaxHeight(`${totalHeight}px`);
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = isExpanded ? maxHeight : "0px";
    }
  }, [isExpanded, maxHeight]);

  return { ref, isExpanded, handleToggle, maxHeight };
}
