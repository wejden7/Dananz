import React, { useState, useEffect } from "react";
import { Button } from "../component/Button";
import { TopPage, MiniTitle } from "../component";
import { topPage, location } from "../db/data";
import useInput from "../hooks/useInput";
import { InputText, InputTextArea } from "../component/input";
import Inp from "../utils/Inp";
import FormShema from "../utils/FormShema";

const SectionOne = () => <TopPage item={topPage[3]} />;

const SectionTow = () => {
  const formShema = new FormShema({
    name: new Inp().Required(),
    lastName: new Inp(),
    email: new Inp().Required().Email(),
    phone: new Inp().Required().Phone(),
    message: new Inp().Required(),
  });
  const [form, bind] = useInput(formShema);
  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    setSubmit(true);
    if (form.valid) {
      alert(JSON.stringify(form) );
    } else {
      alert(JSON.stringify(form) );
    }
  };

  return (
    <div className="w-3/4   ">
      <form>
        <div className="grid lg:grid-cols-2 gap-2">
          <InputText
            submit={submit}
            className=""
            label="First Name"
            bind={bind("name")}
          />
          <InputText
            submit={submit}
            className=""
            label="Last Name"
            bind={bind("lastName")}
          />
          <InputText
            submit={submit}
            className="md:col-span-2"
            label="Email"
            bind={bind("email")}
          />
          <InputText
            submit={submit}
            className="md:col-span-2"
            label="Phone"
            bind={bind("phone")}
          />
          <InputTextArea
            submit={submit}
            bind={bind("message")}
            label="Message"
            className="md:col-span-2"
          />
          <div className="flex justify-center md:col-span-2">
            <Button onClick={onSubmit}>Send Massage</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const LocationDeatil = ({ item }) => (
  <div className="grid gap-8">
    <h1 className="text-h24 text-grayscale-50 font-semibold">{item.title}</h1>
    <p className="text-h18 text-grayscale-10 text-justify">{item.body}</p>
  </div>
);

const SctionThree = () => {
  return (
    <div className="grid w-full gap-8">
      <MiniTitle title="Location" />
      <div className="grid  lg:grid-cols-3 gap-4">
        <div className=" grid place-items-center col-span-2 lg:col-span-1  lg:place-items-start  gap-4">
          <h1 className="text-h36 text-grayscale-50 font-semibold">
            Visit Our Stores
          </h1>
          <h1 className="text-h18 text-grayscale-10 ">
            Find us at these locations.
          </h1>
          <h1 className="text-h24 text-grayscale-50 font-semibold">Email</h1>
          <h1 className="text-h18 text-grayscale-10 ">dananz@gmail.com</h1>
          <h1 className="text-h36 text-grayscale-50 font-semibold">Phone</h1>
          <h1 className="text-h18 text-grayscale-10 ">+62 815 002 1000</h1>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-8">
          {location.map((item, index) => (
            <LocationDeatil key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="font-poppins mx-8  md:mx-24  xl:mx-120 grid gap-16 place-items-center">
    <SectionOne />
    <SectionTow />
    <SctionThree />
    <div></div>
  </div>
);

export default Contact;
