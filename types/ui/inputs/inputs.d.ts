import { ActionMeta, SingleValue } from 'react-select'

export namespace IInputs {
  export interface Props extends React.HTMLProps<HTMLInputElement> {
    label: string
    type?: InputHTMLAttributes.type
  }

  export interface SelectOption {
    value: string
    label: string
  }

  export interface Select<Option> extends Omit<Props, 'onChange'> {
    onChange: (option: Option | null, actionMeta: ActionMeta<Option>) => void
    options: Option[]
    selectValue: Option
    instanceId?: string
    error?: boolean
  }
}
