// /**
//  *
//  * @param {string} password mayor de 8 caracteres
//  * @returns true si la contraseña es valida
//  */
// export const passwordValidator = (password) => {
//   if (
//     lengthIsOverEight(password) &&
//     hasOneUppercase(password) &&
//     hasOneLowercase(password) &&
//     hasOneLowBar(password)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const lengthIsOverEight = (string) => string.length >= 8;
// const hasOneUppercase = (string) => /[A-Z]/.test(string);
// const hasOneLowercase = (string) => /[a-z]/.test(string);
// const hasOneLowBar = (string) => /_/.test(string);

// export const passwordValidator = (password) => {
//   if (!/[A-Z]/.test(password)) {
//     return "Le falta una mayúscula";
//   } else if (password.length >= 8) {
//     return "La contraseña no tiene la longitud requerida";
//   } else if (!/[a-z]/.test(password)) {
//     return "Le falta una minúscula";
//   } else if (!/_/.test(password)) {
//     return "Le falta una _";
//   } else {
//     return "Todo correcto, señor usuario";
//   }
// };

const lengthIsOverEight = (string) => string.length >= 8;
const hasOneUppercase = (string) => /[A-Z]/.test(string);
const hasOneLowercase = (string) => /[a-z]/.test(string);
const hasOneLowBar = (string) => /_/.test(string);
const hasDesactivatedFlag = (obj) =>
  Object.values(obj).some((valuesItem) => valuesItem === false);

const showError = (array) => {
  array.map((errorItem) => console.log(`The problem is the ${errorItem}`));
};

export const passwordValidator = (password) => {
  const flags = {
    lenght: false,
    upperCase: false,
    lowerCase: false,
    downBar: false,
  };

  const arrayOfErrors = [];

  if (lengthIsOverEight(password)) {
    flags.lenght = true;
  }
  if (hasOneUppercase(password)) {
    flags.upperCase = true;
  }
  if (hasOneLowercase(password)) {
    flags.lowerCase = true;
  }
  if (hasOneLowBar(password)) {
    flags.downBar = true;
  }
  if (hasDesactivatedFlag(flags)) {
    for (const key in flags) {
      if (flags[key] === false) {
        arrayOfErrors.push(key);
      }
    }
  }
  if (arrayOfErrors.length == 0) {
    return true;
  }
  showError(arrayOfErrors);
};

console.log(passwordValidator("HOL_a"));
