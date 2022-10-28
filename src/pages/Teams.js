import React from "react";
import { TopPage ,Service,MiniTitle} from "../component/";
import { topPage,profile } from "../db/data";

const CartPerson =({item}) =>(
    <div className=" w-full md:h-400 sm:h-72 bg-lightra relative" >
        <img alt={item.name}  src={item.image} className="h-full"/>
        <div className="bg-white w-full absolute bottom-0 xl:bottom-2 xl:left-2 xl:right-2 p-2 ">
            <h1 className="text-h24 font-semibold text-grayscale-50">{item.name}</h1>
            <h1 className="text-h16 text-grayscale-10 ">{item.post}</h1>
        </div>
       
    </div>
)

const SectionOne = () => <TopPage item={topPage[2]} />;

const SectionTwo = () => (<div className="grid gap-16">
    <div className="grid gap-4 w-full ">
        <MiniTitle title="Designer" />
        <h1 className="xl:text-h36 text-h24 text-grayscale-50 font-semibold">Creative Person</h1>
        <p className="text-h18 text-grayscale-10  md:w-1/2">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
    </div>
    <div className="grid  justify-center place-items-center   xl:grid-cols-4 sm:grid-cols-3   gap-4">
        {profile.map((item,i)=><CartPerson key={i} item={item}/>)}

    </div>
</div>);

const SectionThree = () => <Service/>;

const Teams = () => (
  <div className="font-poppinsxl:mx-120 lg:mx-24 md:mx-8 mx-4 grid gap-24">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <div/>
  </div>
);

export default Teams;
