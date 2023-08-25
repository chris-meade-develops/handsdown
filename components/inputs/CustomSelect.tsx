import { default as LibSelect, ActionMeta, SingleValue } from "react-select";

export default function Select({
  selectValue,
  onChange,
  name,
  label,
  options,
}: IInputs.Select) {
  
  function handleSelectChange(
    newValue: SingleValue<IInputs.SelectOption>,
    actionMeta: ActionMeta<IInputs.SelectOption>
  ) {
    console.log(newValue, actionMeta);
    onChange(newValue);

    return null;
  }

  return (
    <label className="flex flex-col w-full mb-6">
      <span className=" text-tertiary-text mb-[3px]">{label}</span>
      <LibSelect
        name={name}
        options={options}
        unstyled
        classNamePrefix=""
        onChange={handleSelectChange}
        placeholder="Select a course..."
        classNames={{
          control: (state) =>
            `w-full border form-input h-27 py-9 px-11 ${
              state.isFocused &&
              "border-primary-text border-accent border-2 outline-none ring-transparent"
            }`,
            menu: (state) => `w-full bg-white border h-fit`,
            option: (state) => `w-full bg-white h-fit py-9 px-6 hover:bg-accent hover:text-white cursor-pointer`,
        }}
      />
    </label>
  );
}
