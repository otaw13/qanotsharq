import InputContent from "./InputContent";

type Props = {
  open: boolean;
  onSelect: (value: string) => void;
  itemToggle: () => void;
};

export default function InputDropDown({ open, onSelect, itemToggle }: Props) {
  const handleSelect = (city: string) => {
    onSelect(city);
    itemToggle();
  };

  return (
    <div
      className={`${
        open ? "flex flex-col" : "hidden"
      } bg-white w-[267px] absolute border z-10 max-h-[200px] overflow-y-scroll font-medium`}
    >
      {[
        "Budapest - Hungary",
        "Paris - Frnace",
        "Berlin - Germany",
        "New York - USA",
        "Geneve - Switzerland",
        "Seoul - South Korea",
        "Sharm-El-Sheikh - Egypt",
        "St Petersburg - Russia",
        "Tashkent - Uzbekistan ",
      ].map((city) => (
        <InputContent
          key={city}
          city={city}
          country=""
          onClick={() => handleSelect(city)}
        />
      ))}
    </div>
  );
}
