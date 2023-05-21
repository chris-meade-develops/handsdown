interface Input {
  type?: InputHTMLAttributes.type;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<T>) => void;
  name: string;
}

interface Radio extends Input {
  label: string;
}
