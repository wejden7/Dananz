import React from "react";
import { MiniTitle, Details ,TopPage,Service} from "../component";
import {topPage ,image5} from "../db/data";

const SectionOne = () => (
 < TopPage item={topPage[0]}/>
);
const SectionTow = () => (
  <div className="grid gap-16 w-full">
    <div className="grid gap-4">
      <MiniTitle title="ACHEVEMENT" />
      <h1 className="lg:w-3/4 text-h24 xl:text-h36 font-semibold  ">
        interior customization with Danaanz, best quality with professional
        workers
      </h1>
    </div>
    <div className="flex w-full gap-16  lg:h-525 ">
    
      <div className="">
      <img className=" h-full w-full aspect-auto 2xl:w-2xl" src={image5} />
      </div>
      <div className="">
        <Details />
    </div>
     
   
       
      
    </div>
  </div>
);
const SectionThree = () => (<Service/>);

const About = () => {
  return (
    <div className="font-poppins grid gap-24 xl:mx-120 lg:mx-24 md:mx-8 mx-4">
      <SectionOne />
      <SectionTow/>
      <SectionThree/>
     
      <div/>
    </div>
  );
};

export default About;
