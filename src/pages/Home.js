import React from "react";


import { Button ,ButtonNormal} from "../component/Button";
import { Divider, Details,MiniTitle,Product } from "../component";
import * as db from "../db/data"
import {AiOutlineArrowRight} from 'react-icons/ai'
 

const ServiceItem = ({index,service}) =>{
  return  <div className="text-h24 font-semibold text-grayscale-50 flex justify-between place-items-center">
    <div className="flex gap-8">
    <h1>0{index+1}</h1>
    <h2>{service}</h2>
    </div>
    
    <AiOutlineArrowRight/>
</div>
}
const SectionOne = () => (
  <div>
    <div className="relative  text-grayscale-50">
      <h1 className="text-h24 md:text-h32 xl:text-h72 font-bold w-52 md:w-72  xl:w-681">
        Design your interor with high quality.
      </h1>
      <div className="absolute  top-4 md:top-6  xl:top-14 w-full right-0 flex justify-end">
        <Divider width={"md:w-7/12 w-1/2"} />
      </div>
      <h1 className="text-h10 xl:text-h18 font-medium rotate-90- absolute bottom-1 md:bottom-1/4 -right-8  xl:-right-16">
        2022 <br />
        ALL RIGHT RESERVED
      </h1>
    </div>
    <div className=" mt-11 relative">
      <img className="aspect-auto w-full " src={db.image1} alt="something" aria-label="For screen readers"/>
      <div className=" absolute -top-24 hidden md:flex  right-12 md:-top-1/4 md:right-12 lg:-top-24 xl:-top-52 lg:right-1/5 xl:right-40">
        <Details />
      </div>
    </div>
  </div>
);

const SectionTow = () => (
  <div className="grid gap-20">
    <div className="">
      <MiniTitle title="ABOUT"/>
      <h1 className="text-h24 text-justify xl:text-h36 mt-8 font-semibold text-grayscale-50 ">
        We're one of the best furniture agency. Prioritizing customers and
        making purchases easy are the hallmarks of our agency.
      </h1>
    </div>
    <div className=" xl:flex  gap-10 relative">
      <img className="aspect-auto mb-4 w-full" src={db.image3}  alt="something" aria-label="For screen readers"/>
      <div className="xl:absolute bg-white flex place-items-center gap-3  p-2 xl:top-16 xl:right-44">
       
       <img className="w-10 h-10 bg-black  rounded-full" src={db.profile1}  alt="something" aria-label="For screen readers" />
       <div>
         <h1 className="text-h16 font-semibold ">Arga Danaan</h1>
         <h1 className="text-h18 text-grayscale-10">CEO of Dananz</h1>
       </div>
    
   </div>
      <div className="grid gap-10 h-min place-items-center mt-4 xl:mt-52">
        <p className="text-h18 text-grayscale-10 xl:w-56 ">
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere.
        </p>
        <Button>Learn More</Button>
      </div>
     
    </div>
  </div>
);

const SectionThree = () =>(
    <div className="w-full relative">
      
<div className="md:w-3/4 grid gap-10 bg-white lg:absolute">
        <div >
        <MiniTitle title="SERVICE"/>
        <h1 className="text-h24 xl:text-h36 font-semibold text-grayscale-50 mt-4">attractive furniture with the best quality.</h1>
       
        </div>
        <p className="text-h18 text-grayscale-10 w-full md:w-481">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        <div className="grid gap-10">
            {db.services.map((service,index) =>(
                <ServiceItem key={index} service={service} index={index}/>
            ))}
        </div>
    </div>
    <div className=" flex justify-end mt-8 lg:mt-72">
    <img className="h-500 w-full lg:w-3/4 flex justify-end" src={db.image4}  alt="something" aria-label="For screen readers"/>

    </div>
    </div>
    
)

const SectionFour = () =>(<Product/>)

const SectionFive =() =>(
    <div className="grid gap-2 lg:relative">
        <div className="grid gap-4 my-5">
            <MiniTitle title="MATERIAL"/>
            <h1 className="lg:text-h36 text-h24 font-semibold w-350 text-grayscale-50">choice of materials for quality furniture.</h1>
            <p className="text-h18 text-grayscale-10 md:w-481">You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
           <ButtonNormal>See Materials</ButtonNormal>
        </div>
        
        <img className="w-52 h-72 xl:flex hidden absolute bottom-0 right-64" src={db.materio1}  alt="something" aria-label="For screen readers"/>
        <img className="w-full h-60 lg:w-24 lg:h-24 lg:absolute top-64 right-36" src={db.materio3}  alt="something" aria-label="For screen readers"/>
        <img className=" w-full h-60 lg:w-60 lg:h-60 lg:absolute top-0 right-0" src={db.materio2}  alt="something" aria-label="For screen readers"/>
   
        
    </div>
)

const Home = () => {
  return (
    <div className="xl:mx-120 lg:mx-40 md:mx-24 mx-8 font-poppins grid gap-24">
      <SectionOne />
      <SectionTow/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
     
      <div/>
    </div>
  );
};

export default Home;
