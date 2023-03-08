import { repeatString } from "./repeatString.js";

// repeatString("hola", 3) => "holaholahola"
// repeatString("Casa", 2) => "CasaCasa"
// repeatString("Hola", 0) => ""

const result = repeatString('Casa',3);
const expectedResult = 'CasaCasaCasa';

assertEquals(result, expectedResult)

function assertEquals(actualValue, expectedValue) {
    if (actualValue !== expectedValue) {
      throw new Error(
        `Esperaba el valor "${expectedValue}" pero me diste "${actualValue}"`
      );
    }
  }



