import React from "react";
import { serviceAbouts } from "../db/data";
import { MiniTitle } from "./";
const Service = () => (
  <div className="grid gap-8">
    <div className="grid gap-4">
      <MiniTitle title="Service" />
      <h1 className=" lg:text-h36 text-h24 font-semibold text-grayscale-50">
        Why Choose Us
      </h1>
      <p className="md:w-1/2 w-full text-h18 text-grayscale-10">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
    </div>
    <div className="md:flex grid place-items-center gap-4 ">
      {serviceAbouts.map((item, index) => (
        <div
          key={index}
          className="grid place-items-center gap-2  p-4 shadow-1 mx-4 md:mx-0 "
        >
          <div className="w-14 h-14 rounded-full bg-lightray"></div>
          <h1 className="xl:text-h24  font-semibold text-grayscale-50">
            {item.title}
          </h1>
          <p className="xl:text-h18 text-grayscale-10 text-center w-3/4 md:w-full 2xl:w-2/3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Service;
