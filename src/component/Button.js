import React from "react";

export const Button = ({children ,light,onClick}) => (
  <button onClick={onClick} type="button" className={`text-h14 font-medium flex ${light?"bg-white text-grayscale-50 border hover:border-lightray ":"bg-blue-100 text-white w-max hover:bg-blue-90"} px-8 py-3.5  `}>
    {children}
  </button>
); 

export const ButtonNormal = ({children}) => (
  <button type="button" className={`text-h14 font-medium border border-grayscale-30 px-8 py-3.5 w-max  `}>
    {children}
  </button>
); 
