import TabInputComp1 from "./TabInputComp1";
import DatesComponent from "./DatesComponent";
import { useEffect, useState } from "react";
import TravelersBtnComp from "./TravelersBtnComp";

export default function TabContent1() {
  const [users, setUsers] = useState();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
      

  };

  useEffect(() => {
    fetchData();
    console.log(users)
  }, []);

  const [isDisabled, setIsDisabled] = useState(false);

  const handleActive = () => {
    setIsDisabled(false);
  };

  const handleDisable = () => {
    setIsDisabled(true);
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const toggle1 = () => {
    setOpen1(!open1 ? true : false);
    setOpen2(!open1 ? false : open2);
  };

  const toggle2 = () => {
    setOpen2(!open2 ? true : false);
    setOpen1(!open2 ? false : open1);
  };

  const toggle3 = () => {
    setOpen3(!open3 ? true : false);
    setOpen4(!open3 ? false : open4);
  };

  const toggle4 = () => {
    setOpen4(!open4 ? true : false);
    setOpen3(!open4 ? false : open3);
  };

  useEffect(() => {
    const btn = document.getElementById("btn");
    if (btn) {
      const handleClick = () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 200);
      };

      btn.addEventListener("click", handleClick);

      return () => {
        btn.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div className="bg-[#f5f5f5] w-full flex relative">
      <div className="text-[#373737] flex justify-center items-center gap-5">
        <div className="flex flex-col gap-2 p-6 w-full">
          <div className="flex items-center flex-row gap-3 w-full">
            <TabInputComp1
              title="Qayerdan"
              placeholder="Qayerdan"
              id="InputDropDown1"
              open={open1}
              toggle={toggle1}
              value={undefined}
            />
            <button className="mt-6 pr-4 text-[#263366]"> ⮂</button>
            <TabInputComp1
              title="Qayerga"
              placeholder="Qayerga"
              id="InputDropDown2"
              open={open2}
              toggle={toggle2}
              value={undefined}
            />
            <div className="flex flex-col relative z-0">
              <div className="flex  gap-3 items-end">
                <DatesComponent
                  id="DatesComponent1"
                  open={open3}
                  toggle={toggle3}
                  destination="Borish"
                  isDisabled={false}
                />
                <DatesComponent
                  id="DatesComponent2"
                  open={open4}
                  toggle={toggle4}
                  destination="Qaytish"
                  isDisabled={isDisabled}
                />
                <button
                  id="btn"
                  className="bg-[#263364] text-white px-8 py-3 mb-2 rounded-xl border border-[#263364] transition duration-300 hover:text-[#263364] hover:bg-white"
                >
                  ⌕
                </button>
              </div>
              <div className="absolute z-1 top-[100px] flex gap-3">
                <input
                  name="drone"
                  type="radio"
                  onClick={handleActive}
                  className="accent-[#263364] "
                />
                <p>Borish va qaytish</p>

                <input
                  name="drone"
                  type="radio"
                  onClick={handleDisable}
                  className="accent-[#263364] "
                />
                <p>Bir tomonga</p>
              </div>
            </div>
          </div>
          <TravelersBtnComp />
        </div>
      </div>
    </div>
  );
}
