import Type from "../constants/type";
import StringText from "./StringTest";
import Inp from "./Inp";

export default class Validation {
  constructor(item) {
    this.item = new Inp().newItem(item)
  }
  test() {
    let _ = this.#testRequired() || this.#testType();
    return _;
  }
  #testRequired() {
    if (this.item.required)
      if (StringText.isEmpty(this.item.initialValue))
        return this.item.setError('required')
    return null;
  }
  #testType() {
    this.item.deleteError()
    switch (this.item.type) {
      case Type.Email:
        if (!StringText.isEmail(this.item.initialValue)) {
         this.item.setError('not valid')
        }
        break;
      case Type.Number:
        if (!StringText.isNumber(this.item.initialValue)) {
          this.item.setError('not valid')
        }
        break;
      case Type.Double:
        if (!StringText.isDouble(this.item.initialValue)) {
           this.item.setError('not valid')
        }
        break;
      case Type.Phone:
        if (!StringText.isNumberPhone(this.item.initialValue)) {
           this.item.setError('not valid')
        }
        break;
    }
    return this.item;
  }
}
