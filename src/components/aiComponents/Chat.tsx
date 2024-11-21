"use client";
import React, { useEffect, useRef, useState } from "react";
import { useChat } from "ai/react";
import { SendHorizontal, User, Bot } from "lucide-react";
import { Button } from "../ui/button";
import { CoffeeIcon } from "lucide-react";
import { X, MessageCircleQuestion } from "lucide-react";



const Chat = () => {
  const { input, handleInputChange, handleSubmit, messages } = useChat();
  const divRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
        {open ? 
            <div className={`flex flex-col items-center justify-between bg-gray-300 rounded-xl h-[500px] w-80 `}>
            <div className="p-2 w-full">
              <Button onClick={() => setOpen(false)} className="px-3">
                <X/>
              </Button>
            </div>
            <div
              ref={divRef}
              className="overflow-y-auto rounded-xl mt-5 px-5 text-black h-[70%] w-full 2xl:text-4xl"
            >
              {messages.length ? 
                messages.map((message) => (
                  <div key={message.id}>
                    {message.role === 'assistant' ? (
                      <h3 className="text-lg font-semibold mt-4 items-center flex gap-2">
                          <div className="rounded-full bg-gray-100 border p-1"> 
                              <Bot/>
                          </div>
                          <span className="block font-light text-gray-700">bot</span>
                      </h3>
                    ) : (
                      <h3 className="text-lg font-semibold mt-4 justify-end items-center flex gap-2">
                        <span className="block font-light text-gray-700">user</span>
                        <div className="rounded-full bg-gray-100 border p-1"> 
                          <User/>
                        </div>
                      </h3>
                    )}
                    {message.content.split("\n").map((currentTextBlock: string, index: number) => (
                      currentTextBlock === "" ? (
                        <p key={message.id + index}>&nbsp;</p>
                      ) : (
                        <p className={`pt-2 ${message.role === 'user' && 'flex justify-end'}`} key={message.id + index}>
                          {currentTextBlock}
                        </p>
                      )
                    ))}
                  </div>
                )) : 
                <div className="w-full h-full flex flex-col justify-center items-center font-mono">
                  <h1>
                    Ask anything about coffee
                  </h1>
                  <CoffeeIcon size={30}/>
                </div>
              }
            </div>
            <form
              className="p-4 w-full flex justify-center gap-2"
              onSubmit={handleSubmit}
            >
              <input
                className="flex border w-full pl-2 border-gray-300 rounded-md text-gray-600"
                value={input}
                onChange={handleInputChange}
                autoFocus
              />
              <Button type="submit" className="bg-white hover:bg-slate-200 px-3">
                <SendHorizontal fill="black" strokeWidth={0} />
              </Button>
            </form>
          </div> : 
          <div className="p-5" >
            <Button className="px-3" onClick={() => setOpen(true)}>
              <MessageCircleQuestion/>
            </Button>
          </div>
      }
    </div>
  );
};

export default Chat;