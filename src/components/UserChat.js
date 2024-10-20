import React, { useState, useContext, useEffect } from "react";
import { EllipsisIcon } from "lucide-react";
import AppContext from "@/app/context/Context";
import PropTypes from "prop-types";

export default function UserChat(props) {
  const context = useContext(AppContext);
  const [isTriggered, setIsTriggered] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (context.selectedSteps.includes(props.step)) {
      setIsTriggered(true);
    }
  }, [context.selectedSteps, props.step]);

  useEffect(() => {
    if (isTriggered) {
      setTimeout(() => {
        setTyping(false);
      }, 1500);
    }
  }, [isTriggered, context.chatRef]);

  if (!context.selectedSteps.includes(props.step)) {
    return <></>;
  }

  if (isTriggered) {
    return (
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center justify-center flex-shrink-0 text-xs text-white bg-blue-500 rounded-full size-8">
          YOU
        </div>
        <div
          className={`mr-12 xl:mr-24  inline-flex gap-2 p-2 bg-white rounded-lg  w-fit  ${
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

UserChat.propTypes = {
  text: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};
