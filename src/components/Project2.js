import React, { useState, useContext, useEffect } from "react";
import { EllipsisIcon } from "lucide-react";
import AppContext from "@/app/context/Context";
import informal_pic from "@/public/informal_pic.jpg";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import grantable1 from "@/public/grantable1.png";
import grantable2 from "@/public/grantable2.png";
import grantable3 from "@/public/grantable3.png";

export default function Project() {
  const context = useContext(AppContext);
  const [isTriggered, setIsTriggered] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (context.selectedSteps.includes(3)) {
      setTimeout(() => {
        setIsTriggered(true);
      }, 4500);
    }
  }, [context]);

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
    <div className="flex self-end gap-2 ml-12 xl:ml-24">
      <div className="flex-shrink-0 mt-1 size-8 inline-flex items-center justify-center   text-[0.5rem] text-white bg-blue-500 rounded-full">
        <Image
          src={informal_pic}
          width={300}
          height={300}
          alt="Informal Pic"
          className="rounded-full"
        />
      </div>
      <div
        className={` inline-flex gap-2 p-2 bg-white rounded-lg self-end  w-fit ${
          typing && "animate-pulse"
        }`}
      >
        {typing ? (
          <div className="flex justify-center min-w-12">
            <EllipsisIcon className="size-6 inline-fle" />
          </div>
        ) : (
          <div>
            <p>
              Another one would be with{" "}
              <a
                href="https://grantable.co"
                target="_blank"
                className="text-blue-500 transition-all hover:text-purple-500"
              >
                Grantable
              </a>
              , a start-up that provides AI assistance to grant writers. I was
              responsible for the front-end development of the app. The app was
              built using Sveltekit, Supabase and Typescript, with some
              TailwindCSS.
            </p>
            <Carousel showThumbs={false}>
              <div>
                <Image src={grantable1} width={600} alt="grantable-1"></Image>
              </div>
              <div>
                <Image src={grantable2} width={600} alt="grantable-2"></Image>
              </div>
              <div>
                <Image src={grantable3} width={600} alt="grantable-3"></Image>
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
