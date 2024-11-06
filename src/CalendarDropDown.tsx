import React from "react";
import { Calendar } from "./components/ui/calendar";

type CalendarDropDownProps = {
  open: boolean;
  onDateSelect: (date: Date | undefined) => void;
  itemToggle: () => void;
   
};

export default function CalendarDropDown({
  open,
  onDateSelect,
  itemToggle
  
}: CalendarDropDownProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateSelect(selectedDate); 
    itemToggle()
  };

  return (
    <div className={`${open ? "absolute z-10" : "hidden"}`}>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateChange} 
        className="rounded-md border z-10"
      />
    </div>
  );
}
