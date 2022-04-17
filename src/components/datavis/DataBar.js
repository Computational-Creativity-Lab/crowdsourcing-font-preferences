import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// let percentages = [10, 20, 30, 40, 50];

export default function DataBar(props) {
  const [isShown, setIsShown] = useState(false);
  let userChose = props.index == props.randomSelection;

  // let userChose = props.index == props.randomSelection;

  return (
    <div
      onMouseEnter={() => {
        console.log(props.index, props.randomSelection);
        setIsShown(true);
      }}
      onMouseLeave={() => setIsShown(false)}
      class={`${
        props.index == props.randomSelection
          ? `bg-white hover:opacity-[1] hover:cursor-pointer`
          : `bg-[rgba(230,230,255,.25)] `
      } flex flex-col border-solid border-[#ffffff00]
      border p-4 rounded-full ease-in-out
      transition-all relative`}
      style={{ width: `${props.percentage}%` }}
    >
      <p class="text-black font-semibold">Roboto</p>
      <AnimatePresence>
        {isShown && (
          <motion.div
            key="modal"
            initial={{ opacity: 1, top: 5, scale: 0.95 }}
            animate={{ opacity: 1, top: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            class="z-10 text-white origin-bottom absolute !top-[-350px] translate-x-[-1rem] bg-zinc-900 rounded-xl p-4 overflow-hidden w-[300px] h-[324px] drop-shadow-2xl"
          >
            <p class="text-xl mb-8">
              You picked Roboto which is a unique choice!
            </p>

            {props.fontList.map((font, index) => {
              return (
                <div
                  class={`${
                    index == props.index ? "bg-white text-black" : "text-white"
                  } grid grid-cols-[1fr_3fr_1fr] w-full py-4 px-6 rounded-full`}
                >
                  <p>{index + 1}</p>
                  <p>{font}</p>
                  <p class="flex justify-self-end">60%</p>
                </div>
              );
            })}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </div>
  );
}
