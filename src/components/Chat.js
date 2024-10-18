import Info from "./Info";
import UserChat from "./UserChat";
import MyChat from "./MyChat";
import React, { useState, useContext } from "react";
import AppContext from "@/app/context/Context";
import MyProjects from "./MyProjects";
import Image from "next/image";
import informal_pic from "@/public/informal_pic.jpg";
import { XIcon } from "lucide-react";
export default function Chat() {
  const context = useContext(AppContext);

  const [orderedConversation, setOrderedConversation] = useState([]);

  const [showInfo, setShowInfo] = useState(true);

  const conversation = [
    { step: 1, text: "Hi, what's your experience as a software developer?" },
    {
      step: 1,
      text: "Hey! I'm a full stack web developer(mostly frontend) with 4 years of experience using React. Specifically the MERN tech stack, occasionally using UI component libraries like MUI, Shadcn, etc. I've worked with other technologies also like NextJS, Sveltekit, and TailwindCSS.",
    },
    { step: 2, text: "What's your favorite programming language?" },
    {
      step: 2,
      text: "I love JavaScript, it's a versatile language that can be used for both frontend and backend development.",
    },
    {
      step: 3,
      text: "What are your favorite project(s)? Can you show me some of them?",
    },
    { step: 3, text: "Sure! Here are some of my projects:" },
  ];

  function pushToOrderedConversation(step) {
    const filteredChats = conversation.filter((chat) => chat.step === step);
    setOrderedConversation((prev) => {
      return [...prev, ...filteredChats];
    });
  }

  return (
    <div
      className={`  flex flex-col  w-full max-w-4xl mx-8 my-8 overflow-y-auto border rounded-lg shadow-2xl xl:ml-0 sm:mx-12 bg-black/25 relative`}
    >
      <button
        className="absolute transition-all xl:hidden right-4 top-4 hover:scale-125"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        {showInfo ? (
          <XIcon className="text-white bg-red-500 rounded-full size-10" />
        ) : (
          <Image
            src={informal_pic}
            width={50}
            height={50}
            alt="Informal Pic"
            className="rounded-full"
          />
        )}
      </button>
      {showInfo && (
        <div className="flex justify-center xl:hidden transition-delay ">
          <Info />
        </div>
      )}
      <div
        className={`flex flex-col  gap-8 p-8 ${
          !orderedConversation.length && "hidden"
        }`}
      >
        {orderedConversation.map((chat, index) => {
          if (index % 2 == 0) {
            return (
              <UserChat key={chat.text} text={chat.text} step={chat.step} />
            );
          }

          if (chat.step === 3) {
            return (
              <React.Fragment key={chat.text}>
                <MyChat text={chat.text} step={chat.step} />
                <MyProjects />
              </React.Fragment>
            );
          }
          return <MyChat key={chat.text} text={chat.text} step={chat.step} />;
        })}
      </div>

      <div className={`${!context.selectedSteps.length && "my-auto"}`}>
        {!context.selectedSteps.length && (
          <p className="text-center text-white">
            Start the conversation by clicking these!
          </p>
        )}
        <div className="flex items-center justify-center gap-2 my-4">
          {!context.selectedSteps.includes(1) && (
            <button
              className="w-24 p-2 text-white transition-all bg-red-500 rounded-lg hover:bg-red-700 h-fit"
              onClick={() => {
                context.setSelectedSteps([...context.selectedSteps, 1]);
                pushToOrderedConversation(1);
              }}
            >
              Experience
            </button>
          )}
          {!context.selectedSteps.includes(2) && (
            <button
              className="w-24 p-2 text-white transition-all bg-green-500 rounded-lg hover:bg-green-700 h-fit"
              onClick={() => {
                context.setSelectedSteps([...context.selectedSteps, 2]);
                pushToOrderedConversation(2);
              }}
            >
              Language
            </button>
          )}

          {!context.selectedSteps.includes(3) && (
            <button
              className="w-24 p-2 text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-700 h-fit"
              onClick={() => {
                context.setSelectedSteps([...context.selectedSteps, 3]);
                pushToOrderedConversation(3);
              }}
            >
              Projects
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
