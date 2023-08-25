import Input from '../inputs/Input'
import Select from '../inputs/CustomSelect'
import Checkbox from '../inputs/Checkbox'
import Radio from '../inputs/Radio'

export default function FormSection({ options }: IForm.Props) {
  const componentMap: IForm.ComponentMap = {
    input: Input,
    select: Select,
    checkbox: Checkbox,
    radio: Radio,
  }
  function renderFormInputs() {
    return options.map((option: IForm.Options, i: number) => {
      const Component = componentMap[option.type]
      return <Component key={i} {...(option.props as any)} />
    })
  }

  return <>{renderFormInputs()}</>
}
