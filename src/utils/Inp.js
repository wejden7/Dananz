import Type from "../constants/type";
export default class Inp {
  constructor(initialValue = "") {
    this.initialValue = initialValue;
    this.type = Type.Text;
    this.required = false;
    this.error = "";
    this.valide = false;
  }

  newItem(item){
    this.initialValue = item.initialValue;
    this.type = item.type;
    this.required = item.required;
    this.error = item.error;
    this.valide = item.valide;
    return this;
  }
  getValue(){
    return this.initialValue;
  }
  getError(){
    return this.error;
  }

  setValue(value){
    this.initialValue = value;
    return this;
  }

  setError(msg){
    this.error = msg;
    this.valide  = false;
    return this;

  }
  deleteError(){
    this.error = "";
    this.valide  = true;
    return this;

  }

  Required() {
    this.required = true;
    return this;
  }
  Email() {
    this.type = Type.Email;
    return this;
  }
  Number() {
    this.type = Type.Number;
    return this;
  }
  Double() {
    this.type = Type.Double;
    return this;
  }
  Phone() {
    this.type = Type.Phone;
    return this;
  }
}
