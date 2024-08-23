import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="workexp" className="py-20">
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple">work experience</span>
        </h1>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: 'calc(1.75rem* 0.96)',
              }}
              className="relative flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              {card.banner && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-bold py-1 px-2 rounded-t-[calc(1.75rem* 0.96)] inline-block">
                  {card.banner}
                </div>
              )}
              <div className="absolute top-4 right-4 text-sm text-white-200">
                {card.date} {/* Display the date */}
              </div>
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <ul className="text-start text-white-100 mt-3 font-semibold list-disc list-inside">
                    {card.desc.map((item: string, index: number) => (
                      <li key={index} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
