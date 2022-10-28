import Validation from "../utils/validation";
export default class formShema {

  constructor(shema) {
    shema.valid = false;
    return formShema.#validationInitial(shema);
  }

  

  static setItem(form,  item,index) {
    form[index]=item
    return formShema.#validationitem(form, index);
  }

  static getFormValue(form){
   let formvaluer = {}
    let _Array_Form = Object.entries(form).filter((item)=>(item[0]!='valid'));
    _Array_Form.map((i)=>{
        
       formvaluer[i[0]] =i[1].initialValue
    })
    return formvaluer;
  }
  static getItemValue(form,index,formvaluer){
   
  
    formvaluer[index] =form[index].initialValue
    
     return formvaluer;
   }

  static #validationInitial = (form) => {
    let _Array_Form = Object.entries(form).filter((item)=>(item[0]!='valid'));
    _Array_Form.map((i)=>{
        const validation = new Validation(form[i[0]]);
        form[i[0]] = validation.test();
    })
    return formShema.#validation(form);
  };

  static #validationitem = (form, index) => {
    const validation = new Validation(form[index]);
    form[index] = validation.test();
    return formShema.#validation(form);
  };

  static #validation = (form) => {
    let _Array_Form = Object.entries(form).filter((item)=>(item[0]!='valid'));
    let _Form_copy = { ...form };
    let valid = true;
    for (let i of _Array_Form) {
      let object_item = i[1];
      if (!object_item.valide) {
        valid = false;
      }
    }
    _Form_copy.valid = valid;
    return _Form_copy;
  };
}