import { useState,useEffect} from "react";
import FormShema from "../utils/FormShema";
import Inp from "../utils/Inp";

export const useInput = (props) => {
  const [form, setForm] = useState(props);
  const [value,setValue] = useState({})

useEffect(() => {

 setValue(FormShema.getFormValue(form)) 
 
 
}, [])


  const bind = (index) => {
    let item = new Inp().newItem(form[index]);
   
    return {
      value: item.getValue(),
      error: item.getError(),
      onChange: (e) => {
        item.setValue(e.target.value);
        setForm(FormShema.setItem(form, item, index));
        setValue(FormShema.getItemValue(form,index,value)) 
      },
    };
  };

  return [value, bind];
};

export default useInput;
