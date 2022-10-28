import React from "react";

export const InputText = ({ label, bind, className ,submit}) => {
  return (
    <label className={`grid  gap-1 ${className}`}>
      {label}:
      <input
        {...bind}
        className="focus:outline-none h-14 border border-grayscale-10 px-4"
        placeholder={label}
      />
    <p className="text-h10 text-red h-4 text-end"> {(bind?.error!==""&&submit)?`${label} ${bind?.error}`:""}</p>
    </label>
  );
};

export const InputTextArea = ({ label, bind, className ,submit}) => {
  return (
    <label className={`grid gap-1 ${className}`}>
      {label} :
      <textarea
        {...bind}
        rows="5"
        className={`focus:outline-none  border border-grayscale-10 px-4 py-4 `}
        placeholder={label}
      />
      <p className="text-h10 text-red h-4 text-end ">{(bind?.error!==""&&submit)?`${label} ${bind?.error}`:""}</p>
    </label>
  );
};
