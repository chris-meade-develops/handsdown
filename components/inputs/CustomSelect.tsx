import { type GroupBase, default as LibSelect } from 'react-select'
import { type IInputs } from '@/types/ui/inputs/inputs'

export default function Select<Option>({
  selectValue,
  onChange,
  name,
  label,
  options,
  instanceId,
  placeholder,
  error,
}: IInputs.Select<Option>) {
  return (
    <label className="flex flex-col w-full mb-6">
      <span
        className={`text-base font-normal leading-5 mb-[3px] ${
          error ? '!text-red-500' : ''
        }`}
      >
        {label}
      </span>
      <LibSelect
        name={name}
        options={options}
        unstyled
        classNamePrefix=""
        onChange={onChange}
        value={selectValue}
        instanceId={instanceId}
        placeholder={placeholder}
        classNames={{
          control: (state) => {
            return `w-full form-input h-27 py-9 px-11 rounded-md ${
              state.isFocused
                ? 'border-accent border-2 outline-none ring-transparent'
                : error ? 'border-2 border-red-500' : 'border-primary-text border'
            }`
          },
          menu: (state) => `w-full bg-white border h-fit`,
          option: (state) =>
            `w-full bg-white h-fit py-9 px-6 hover:bg-accent hover:text-white cursor-pointer`,
        }}
      />
    </label>
  )
}
