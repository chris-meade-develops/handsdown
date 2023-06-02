"use client";

export default function Radio({ onChange, name, label }: iRadio) {
  return (
    <label className="w-full">
      <input
        type="radio"
        className="rounded-full text-tertiary-text h-9 w-9 form-radio border-tertiary-text focus:ring-transparent "
        name={name}
        onChange={onChange}
      />
      <span className="ml-4 font-normal leading-5">{label} </span>
    </label>
  );
}
