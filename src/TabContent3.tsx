import SecondInputComp from "./SecondInputComp";
import { useEffect } from "react";

export default function TabContent3() {
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
    <div className="flex p-6 h-[214px] items-start ">
      <SecondInputComp
        title="Yo'lovchining sharifi"
        placeholder=""
        subtitle="Buyurtmalarni boshqarish, statusni tekshirish va boshqa mahsulotlarni qo'shish."
      />
      <SecondInputComp
        title="
Chipta yoki buyurtma raqami"
        placeholder=""
        subtitle=""
      />
      <button
        id="btn"
        className="bg-[#263364] text-white px-8 py-3 text-nowrap mt-14  rounded-xl border border-[#263364] transition duration-300 hover:text-[#263364] hover:bg-white"
      >
        Davom Etish
      </button>
    </div>
  );
}
