"use client";
import Info from "@/components/Info";
import Chat from "@/components/Chat";
import Image from "next/image";
import Backround from "@/public/background.jpg";
import { useState, useMemo, useRef } from "react";
import AppContext from "@/app/context/Context";

export default function Home() {
  const [chatStep, setChatStep] = useState(0);
  const [selectedSteps, setSelectedSteps] = useState([]);
  const contextValue = useMemo(
    () => ({ chatStep, setChatStep, selectedSteps, setSelectedSteps }),
    [chatStep, setChatStep, selectedSteps, setSelectedSteps]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <div className="flex justify-center h-full ">
        <div>
          <div className="absolute top-0 left-0 flex items-center w-full h-full bg-black backdrop-blur -z-50 ">
            <Image
              priority={true}
              src={Backround}
              width={3840}
              alt=""
              className="object-contain flip blur"
            />
          </div>
        </div>
        <div className="hidden bg-transparent xl:flex ">
          <Info />
        </div>
        <Chat />
      </div>{" "}
    </AppContext.Provider>
  );
}
