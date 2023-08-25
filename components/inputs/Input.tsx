export default function Input({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
}: IInputs.Props) {
  return (
    <label className="flex flex-col w-full mb-6">
      <span className=" text-tertiary-text mb-[3px] font-medium">{label}</span>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value ? value : undefined}
        placeholder={placeholder}
        className="w-full border form-input h-27 py-9 px-11 border-primary-text focus:border-accent focus:border-2 focus:outline-none focus:ring-transparent"
      />
    </label>
  );
}
