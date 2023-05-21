"use client";
import Input from "./Input";
import Radio from "./Radio";

export default function Form() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return (
    <form className="flex flex-col w-full text-base font-medium font-montserrat">
      <div className="flex mb-20">
        <div className="w-1/2">
          <Radio onChange={handleChange} name="customer" label="I am the parent" />
        </div>
        <div className="w-1/2">
          <Radio onChange={handleChange} name="customer" label="I am the student" />
        </div>
      </div>
      <Input
        type="text"
        name="Name"
        placeholder="Name"
        onChange={handleChange}
      />
    </form>
  );
}
