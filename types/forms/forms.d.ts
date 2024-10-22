namespace IForm {
  interface Props {
    option: IInputs.Props
  }

  interface ComponentMap {
    text: React.ComponentType<IInputs.Props>
    select: React.ComponentType<IInputs.Select>
    radio: React.ComponentType<IInputs.Radio>
  }
}
