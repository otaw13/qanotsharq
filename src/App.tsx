import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import image from "./assets/plane.svg";
import ticket from "./assets/ticket.svg";
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";

function App() {
  return (
    <>
      <Tabs
        defaultValue="page1"
        className="rounded-t-xl w-full h-full  bg-gray-100 TabShadow"
      >
        <TabsList className="rounded-xl">
          <TabsTrigger
            className="  px-5 py-[25px] text-xl  data-[state=active]:text-[#263366] gap-3 rounded-xl"
            value="page1"
          >
            <img src={image} />
            CHIPTA OLISH
          </TabsTrigger>
          <TabsTrigger
            className=" px-5 py-[25px] text-xl  data-[state=active]:text-[#263366] gap-3 rounded-xl"
            value="page2"
          >
            <img src={ticket} />
            RO'YHATDAN OTISH
          </TabsTrigger>
          <TabsTrigger
            className=" px-5 py-[25px] text-xl  data-[state=active]:text-[#263366] gap-3 rounded-xl"
            value="page3"
          >
            <img src={ticket} />
            MENING XARIDLARIM
          </TabsTrigger>
        </TabsList>
        <TabsContent value="page1">
          <TabContent1 />
        </TabsContent>
        <TabsContent value="page2">
          <TabContent2 />
        </TabsContent>
        <TabsContent value="page3">
          <TabContent3 />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default App;
