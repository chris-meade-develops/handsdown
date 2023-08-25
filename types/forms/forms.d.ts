namespace IForm {
  interface Options {
    type: keyof ComponentMap
    props: IInputs.Props | IInputs.Select | IInputs.Radio
  }

  interface Props {
    options: FormOptions[]
  }

  interface ComponentMap {
    input: React.ComponentType<IInputs.Props>
    select: React.ComponentType<IInputs.Select>
    checkbox: React.ComponentType<IInputs.Radio>
    radio: React.ComponentType<IInputs.Radio>
  }
}
