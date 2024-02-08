/*
1  Допустимы.. латинские буквы | - | _ |(0-9);
2  Недопустимо.. подряд более трёх цифр | начин и заканч цифрами | _ | -
*/

class Validator {
  constructor(log) {
    this.log = log;
  }

  validateUsername() {
    const num3 = /^(?!.*\d{4})/.test(this.log);
    const numStartFinish = /^\d|\d$|^-|-$|^_|_$/.test(this.log);
    const allowance = /[^A-Za-z0-9_-]/.test(this.log);
    if (num3 === false || numStartFinish === true || allowance === true) {
      throw new Error('Логин не соответсвует требованиям');
    } else {
      return (`Ваш логин '${this.log}' соответствует требованиям.`);
    }
  }
}

const logUs = new Validator('NikitaSB014s');
logUs.validateUsername();

//  export default Validator;
