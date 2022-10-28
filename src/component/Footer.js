import React from "react";
import { Button } from "./Button";
import { Logo,Divider } from "./";
import * as Icon from 'react-icons/fa'
import {CgArrowsExchange} from 'react-icons/cg'

const SectionOne = () => {
  return (
    <div className="bg-blue-100 w-full h-203 flex place-items-center font-poppins">
      <div className="xl:mx-120 md:mx-24 mx-4 lg:flex justify-between w-full  place-items-center   ">
        <div className="xl:w-613 lg:w-3/4 ">
          <h1 className="xl:text-h36 md:text-h24 font-semibold text-white ">
            let's discuss making your interior like a dream place!
          </h1>
        </div>
        <div className=" grid place-items-start gap-5 xl:w-432">
          <h1 className="md:text-h18 text-lightray font-normal ">
            Contact us below to work together to build your amazing interior
          </h1>
          <Button light={true}>Contact us</Button>
        </div>
      </div>
    </div>
  );
};
const SectionTow = () => {
  return (
    <div className="w-full grid gap-4  font-poppins py-16">
      <div className="md:flex grid gap-4  place-items-center justify-between xl:mx-120 lg:mx-24 md:mx-8 mx-4">
        <div className="grid gap-2.5 ">
          <Logo />
          <h1 className="xl:text-h36 lg:text-h24 text-h20 font-semibold text-grayscale-50 lg:w-481">
            One of the best furniture agency.
          </h1>
        </div>
        <div className="grid  gap-2.5 ">
        <div className=" grid  h-min">
          <div className="flex gap-2.5 place-items-center text-grayscale-50">
            <div className="w-3.5 h-3.5 bg-grayscale-50 rounded-full"></div>
            <label className="lg:text-h18 text-h14">
              Enter your email to get the laterst news
            </label>
          </div>
          <div className="lg:flex hidden justify-end text-h36"><CgArrowsExchange/></div>

          <input
            className="text-h16 text-grayscale-50 focus:outline-none h-10"
            placeholder="Email Address"
          />
        </div>
        <Divider width="xl:w-432"/>

        </div>
        
      </div>
      <div className="grid xl:justify-end h-min gap-2.5 lg:ml-24 md:mx-8 xl:mr-120  mx-8">
            <h1 className="text-16text-grayscale-50">Follow us On</h1>
            <div className="flex gap-8">
                <Icon.FaFacebook className="w-8 h-8 p-2 bg-lightray rounded-full"/>
                <Icon.FaInstagram className="w-8 h-8 p-2 bg-lightray rounded-full"/>
                <Icon.FaTiktok className="w-8 h-8 p-2 bg-lightray rounded-full"/>
                <Icon.FaYoutube className="w-8 h-8 p-2 bg-lightray rounded-full"/>

            </div>

        </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <SectionOne />
      <SectionTow />
    </div>
  );
};

export default Footer;
