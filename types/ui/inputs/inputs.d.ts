namespace IInputs {
  interface Props {
    type?: InputHTMLAttributes.type;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<T>) => void;
    name: string;
    label?: string;
  }
  
  interface Radio extends Omit<Props, 'label'> {
    label: string;
  }

  interface SelectOption {
    value: string;
    label: string;
  }
  
  interface Select extends Omit<Props, 'onChange'> {
    onChange: (T) => void;
    options: { value: string; label: string }[];
    selectValue: SelectOption;
  }
}