import { useState } from "react";
import Callendar from "@/assets/calendar.svg";
import CalendarDropDown from "./CalendarDropDown";
import { format } from "date-fns";

type Props = {
  destination: string;
  toggle: () => void;
  open: boolean;
  id: string;
  isDisabled: boolean;
};

export default function DatesComponent(props: Props) {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, "dd/MM/yyyy");
      setSelectedDate(formattedDate);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3>Sana</h3>
      <div
        onClick={!props.isDisabled ? props.toggle : undefined}
        className="relative"
      >
        <div
          style={{
            filter: props.isDisabled ? "grayscale(100%)" : "grayscale(0%)",
            backgroundColor: props.isDisabled ? "#d1d5db" : "#fff",
            cursor: props.isDisabled ? "not-allowed" : "pointer",
          }}
          className="flex bg-white "
        >
          <img className="pl-3" src={Callendar} alt="Calendar Icon" />
          <div className="flex justify-start w-[150px] text-[#343a40] py-3 outline-none pl-4">
            <h3>{selectedDate || props.destination}</h3>
          </div>
          <button
            style={{
              backgroundColor: props.isDisabled ? "#d1d5db" : "#fff",
              cursor: props.isDisabled ? "not-allowed" : "pointer",
            }}
            className="p-3 text-[#263366] bg-white cursor-pointer"
            disabled={props.isDisabled}
          >
            ↓
          </button>
        </div>
      </div>
      <div>
        <CalendarDropDown open={props.open} itemToggle={props.toggle} onDateSelect={handleDateSelect} />
      </div>
    </div>
  );
}
