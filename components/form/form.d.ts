interface iInput {
  type?: InputHTMLAttributes.type;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<T>) => void;
  name: string;
  label?: string;
}

interface iRadio extends iInput {
  label: string;
}

interface iSelect extends iInput {
  stateSetter: (T) => void;
  options: { value: string; label: string }[];
  selectValue: SelectOption;
}
interface iSelectOption {
  value: string;
  label: string;
}

interface iFormOptions {
  type: keyof ComponentMap;
  props: iInput | iSelect | iRadio;
}

interface iFormSectionProps {
  options: FormOptions[];
}

interface ComponentMap {
  input: React.ComponentType<iInput>,
  select: React.ComponentType<iSelect>,
  checkbox: React.ComponentType<iInput>,
  radio: React.ComponentType<iRadio>,
}
