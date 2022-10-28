import React from "react";
import { details } from "../db/data";
import AnimatedNumbers from "react-animated-numbers";
const Details = () => (
  <div className="bg-blue-100 w-max text-white grid  h-min gap-4 md:gap-14 text-center p-4 md:p-11 md:h-525">
    {details.map((item, index) => (
      <div key={index}>
        <h1 className="text-h124 md:text-h52 flex justify-center ">
          
          <AnimatedNumbers
            animateToNumber={item.value}
            configs={[
                { mass: 1, tension: 100, friction: 150 },
              ]}
          />
          +
        </h1>
        <h1 className="text-h10 md:texy-h16">{item.title}</h1>
      </div>
    ))}
  </div>
);

export default Details;
