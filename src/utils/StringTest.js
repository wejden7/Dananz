export default class StringTest {
  static isEmpty = (_) => {
    if (_?.length === 0) {
      return true;
    }
    return false;
  };

  static isNotEmpty(value) {
    if (!value || value.length === 0 || value === "") return false;
    return true;
  }

  static isEmail = (_) => {
    var validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (_?.toLowerCase().match(validRegex) || this.isEmpty(_)) {
      return true;
    } else {
      return false;
    }
  };

  static isNumberPhone = (_) => {
    var validRegex = /^\(?([0-9]{2})\)?([0-9]{3})([0-9]{3})$/;

    if (_?.match(validRegex) || this.isEmpty(_)) {
      return true;
    } else {
      return false;
    }
  };

  static isDouble = (_) => {
    var validRegex = /^[0-9]+\.?[0-9]*?$/;

    if (_?.match(validRegex) || this.isEmpty(_)) {
      return true;
    } else {
      return false;
    }
  };
  static isNumber = (_) => {
    var validRegex = /^[0-9]*$/;

    if (_?.match(validRegex) || this.isEmpty(_)) {
      return true;
    } else {
      return false;
    }
  };
}
