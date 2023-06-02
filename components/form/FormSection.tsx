import Input from "./input";
import Select from "./select";
import Checkbox from "./checkbox";
import Radio from "./radio";

export default function FormSection({ options }: iFormSectionProps) {
  const componentMap: ComponentMap = {
    input: Input,
    select: Select,
    checkbox: Checkbox,
    radio: Radio,
  };
  function renderFormInputs() {
    return options.map((option: iFormOptions, i) => {
      const Component = componentMap[option.type];
      return (
        <div key={i}>
          <Component {...(option.props as any)} />
        </div>
      );
    });
  }

  return <div>{renderFormInputs()}</div>;
}
