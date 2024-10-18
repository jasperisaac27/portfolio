import React, { useState, useContext, useEffect, useRef } from "react";
import { EllipsisIcon } from "lucide-react";
import AppContext from "@/app/context/Context";
import PropTypes from "prop-types";
import informal_pic from "@/public/informal_pic.jpg";
import Image from "next/image";

export default function MyChat(props) {
  const context = useContext(AppContext);
  const [isTriggered, setIsTriggered] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (context.selectedSteps.includes(props.step)) {
      setTimeout(() => {
        setIsTriggered(true);
      }, 1500);
    }
  }, [context.selectedSteps, props.step]);

  useEffect(() => {
    if (isTriggered) {
      setTimeout(() => {
        setTyping(false);
      }, 1500);
    }
  }, [isTriggered, context.chatRef]);

  if (!context.selectedSteps.includes(props.step) && !isTriggered) {
    return <></>;
  }

  if (isTriggered) {
    return (
      <div className="flex self-end gap-2 ml-12 xl:ml-24">
        <div className="flex-shrink-0 size-8 mt-1 inline-flex items-center justify-center   text-[0.5rem] text-white bg-blue-500 rounded-full">
          <Image
            src={informal_pic}
            width={300}
            height={300}
            alt="Informal Pic"
            className="rounded-full"
          />
        </div>
        <div
          className={`inline-flex gap-2 p-2 bg-white rounded-lg self-end  w-fit ${
            typing && "animate-pulse"
          }`}
        >
          {typing ? (
            <div className="flex justify-center min-w-12">
              <EllipsisIcon className="size-6 inline-fle" />
            </div>
          ) : (
            props.text
          )}
        </div>{" "}
      </div>
    );
  }

  return <></>;
}

MyChat.propTypes = {
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};
