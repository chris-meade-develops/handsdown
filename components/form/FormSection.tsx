import Input from '@/components/inputs/Input'
import Select from '@/components/inputs/CustomSelect'
import Checkbox from '@/components/inputs/Checkbox'
import Radio from '@/components/inputs/Radio'

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
