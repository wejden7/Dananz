import React from "react";
import { achivements,topPage } from "../db/data";
import { MiniTitle,TopPage,Product } from "../component/";
import {AiOutlineArrowRight} from 'react-icons/ai'


const SectionOne = () => (
 <TopPage item={topPage[1]}/>
);
const SectionTow = () => (
  <div className="grid gap-8">
    <MiniTitle title="ACHIEVEMENT" />
    <div className="grid gap-16">
      {achivements.map((achievement, i) => (
        <div className="md:flex grid gap-16 place-items-center">
          <img
            className="xl:h-350 lg:h-60 md:h-40  h-72 w-full "
            src={achievement.image}
            alt={achievement.title}
          />
          <div className=" grid gap-4 text-center">
            <h1 className="text-h24 font-semibold text-grayscale-50">
              {achievement.title}
            </h1>
            <p className="text-h18 text-grayscale-10 md:w-350">
              {achievement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
const SectionThree = () => (<Product/>);

const Services = () => {
  return (
    <div className="grid gap-24 xl:mx-120 lg:mx-24 md:mx-8 mx-4 font-poppins">
      <SectionOne />
<SectionTow/>
      <SectionThree />
      <div>     </div>
    </div>
  );
};

export default Services;
