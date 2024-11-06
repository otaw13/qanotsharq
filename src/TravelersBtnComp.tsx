import { useEffect, useState } from "react";
import DropDownFunctionality from "./DropDownFunctionality";

export default function TravelersBtnComp() {
  const [totalPriceCount, setTotalPriceCount] = useState(0);
  const [, setChildPriceCounts] = useState([0, 0, 0, 0]);
  const [totalCount, setTotalCount] = useState(0);
  const [, setChildCounts] = useState([0, 0, 0, 0]);

  const updateTotalPriceCount = (index: number, newPriceCount: number) => {
    setChildPriceCounts((prevPriceCounts) => {
      const updatedPriceCounts = [...prevPriceCounts];
      updatedPriceCounts[index] = newPriceCount;
      const totalPrice = updatedPriceCounts.reduce(
        (acc, priceCount) => acc + priceCount,
        0
      );
      setTotalPriceCount(totalPrice);
      return updatedPriceCounts;
    });
  };

  const updateTotalCount = (index: number, newCount: number) => {
    setChildCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] = newCount;
      const total = updatedCounts.reduce((acc, count) => acc + count, 0);
      setTotalCount(total);
      return updatedCounts;
    });
  };

  useEffect(() => {
    const dropDownBtn = document.getElementById("dropDownBtn");
    const dropDown = document.getElementById("dropDown");

    const handleClick = () => {
      if (dropDown!.style.display === "flex") {
        dropDown!.style.display = "none";
      } else {
        dropDown!.style.display = "flex";
      }
    };

    const handleClickOutside = (e: any) => {
      if (
        dropDown &&
        !dropDown.contains(e.target) &&
        !dropDownBtn!.contains(e.target)
      ) {
        dropDown.style.display = "none";
      }
    };

    if (dropDownBtn) {
      dropDownBtn.addEventListener("click", handleClick);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (dropDownBtn) {
        dropDownBtn.removeEventListener("click", handleClick);
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, []);

  return (
    <div className="flex gap-3 relative my-5 ">
      <h3 className="font-semibold">
        {totalCount} Yolovchilar +{totalPriceCount} $
      </h3>
      <button id="dropDownBtn">↓</button>
      <div
        id="dropDown"
        className="hidden flex-col gap-5 px-5 justify-center  top-8 w-[325px] rounded-xl h-[280px] bg-white absolute border"
      >
        <DropDownFunctionality
          price="+100"
          description="13 yoshdan"
          subTitle="Yo'lovchilar"
          updateCount={(newCount) => updateTotalCount(0, newCount)}
          updatedPriceCount={(newPriceCount) =>
            updateTotalPriceCount(0, newPriceCount)
          }
          priceIncrement={100}
        />
        <DropDownFunctionality
          price="+200"
          description="2-12 yoshgacha"
          subTitle="Yosh Bolalar"
          updateCount={(newCount) => updateTotalCount(1, newCount)}
          updatedPriceCount={(newPriceCount) =>
            updateTotalPriceCount(1, newPriceCount)
          }
          priceIncrement={200}
        />
        <DropDownFunctionality
          price="+300"
          description="2 yoshgacha"
          subTitle="Chaqaloqlar"
          updateCount={(newCount) => updateTotalCount(2, newCount)}
          updatedPriceCount={(newPriceCount) =>
            updateTotalPriceCount(2, newPriceCount)
          }
          priceIncrement={300}
        />
        <DropDownFunctionality
          price="+400"
          description="2 yoshgacha"
          subTitle="Chaqaloqlar (joy)"
          updateCount={(newCount) => updateTotalCount(3, newCount)}
          updatedPriceCount={(newPriceCount) =>
            updateTotalPriceCount(3, newPriceCount)
          }
          priceIncrement={400}
        />
      </div>
    </div>
  );
}
