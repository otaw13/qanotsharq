type Props = {
  title: string;
  placeholder: string;
  subtitle: string;
};

export default function SecondInputComp(props:Props) {
  return (
    <div className="flex flex-col gap-6 w-[80%] text-[#33333]">
      <h3 className="font-medium text-[20px]">{props.title}</h3>
      <input  className="placeholder-[#33333] w-[90%] py-4 pl-10  outline-none" placeholder={props.placeholder} type="text" />
      <p className=" text-nowrap">{props.subtitle}</p>
    </div>
  );
}
