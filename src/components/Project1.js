import React, { useState, useContext, useEffect } from "react";
import { EllipsisIcon } from "lucide-react";
import AppContext from "@/app/context/Context";
import informal_pic from "@/public/informal_pic.jpg";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import tip1 from "@/public/tip1.png";
import tip2 from "@/public/tip2.png";
import tip3 from "@/public/tip3.png";

export default function Project() {
  const context = useContext(AppContext);
  const [isTriggered, setIsTriggered] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (context.selectedSteps.includes(3)) {
      setTimeout(() => {
        setIsTriggered(true);
      }, 3000);
    }
  }, [context.selectedSteps]);

  useEffect(() => {
    if (isTriggered) {
      setTimeout(() => {
        setTyping(false);
      }, 1500);
    }
  }, [isTriggered]);

  if (!isTriggered) {
    return <></>;
  }
  return (
    <div
      className={`ml-12 xl:ml-24 inline-flex gap-2 p-2 bg-white rounded-lg self-end  w-fit ${
        typing && "animate-pulse"
      }`}
    >
      <div className="flex-shrink-0 size-6 inline-flex items-center justify-center   text-[0.5rem] text-white bg-blue-500 rounded-full">
        <Image
          src={informal_pic}
          width={300}
          height={300}
          alt="Informal Pic"
          className="rounded-full"
        />
      </div>
      {typing ? (
        <div className="flex justify-center min-w-12">
          <EllipsisIcon className="size-6 inline-fle" />
        </div>
      ) : (
        <div>
          <p>
            My first fruitful project was with{" "}
            <a
              href="https://theinvestorspodcast.com"
              target="_blank"
              className="text-blue-500 transition-all hover:text-purple-500"
            >
              The Investor&apos;s Podcast Network Inc.
            </a>{" "}
            A SaaS app that was focused on providing financial tools to users
            about investing. It was built using the MERN stack and was deployed
            on Heroku. The app was built with a clean and simple UI, and it was
            a great learning experience for me.
          </p>
          <Carousel className="mr-8" showThumbs={false}>
            <div>
              <Image src={tip1} width={600} alt="tip-1"></Image>
            </div>
            <div>
              <Image src={tip2} width={600} alt="tip-2"></Image>
            </div>
            <div>
              <Image src={tip3} width={600} alt="tip-3"></Image>
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
}
