import { useState } from "react";
import InputDropDown from "./InputDropDown";

type Props = {
  title: string;
  placeholder: string;
  id: string;
  toggle: () => void;
  open: boolean;
  value?: string;
};

export default function TabInputComp1(props: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSelect = (value: string) => {
    setInputValue(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-y-2 w-full relative">
      <h3 className="font-medium text-[20px] inline-block">{props.title}</h3>
      <div className="flex">
        <input
          type="text"
          className="text-[#737373] font-medium py-3 outline-none pl-3 pr-10 "
          placeholder={props.placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={props.toggle}
          id={props.id}
          className="p-3 text-[#263366] bg-white"
        >
          ↓
        </button>
      </div>
      <div>
        <InputDropDown open={props.open} itemToggle={props.toggle} onSelect={handleSelect} />
      </div>
    </div>
  );
}
