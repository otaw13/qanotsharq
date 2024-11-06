import { useState } from "react";

type Props = {
  subTitle: string;
  description: string;
  updateCount: (newCount: number) => void;
  updatedPriceCount: (newPriceCount: number) => void;
  priceIncrement: number; 
  price:string;
};

export default function DropDownFunctionality(props: Props) {
  let [count, setCount] = useState(0);
  let [priceCount, setPriceCount] = useState(0);

  
  function handleCountChange(amount: number) {
    setCount((prevCount) => {
      const newCount = prevCount + amount >= 0 ? prevCount + amount : 0; 
      props.updateCount(newCount); 
      return newCount;
    });

    setPriceCount((prevPriceCount) => {
      const newPriceCount =
        prevPriceCount + amount * props.priceIncrement >= 0
          ? prevPriceCount + amount * props.priceIncrement
          : 0; 
      props.updatedPriceCount(newPriceCount); 
      return newPriceCount;
    });
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-bold text-[14px]">{props.subTitle}</h4>
        <p>{props.description}</p>
      </div>
        <p className="font-bold">{props.price}</p>
      <div className="flex justify-center items-center gap-x-3">
        <button
          onClick={() => handleCountChange(-1)} 
          className="rounded-full px-2 bg-gray-300"
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => handleCountChange(1)} 
          className="rounded-full px-[6px] bg-[#deebf6] border border-[#6aa4d8]"
        >
          +
        </button>
      </div>
    </div>
  );
}
