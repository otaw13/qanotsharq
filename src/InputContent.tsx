type Props = {
  city: string;
  country: string;
  onClick: () => void;
};

export default function InputContent({ city, country, onClick }: Props) {
  return (
    <div
      className="flex px-4 hover:bg-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-x-3 py-1">
        <p>{city}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}
