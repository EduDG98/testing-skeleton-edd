import { passwordValidator } from "./passwordValidator.js";
import { describe, it, expect } from "vitest";

describe("passwordValidator()", () => {
  it.skip("comprueba si no llega a los 8 caracteres a la contraseña", () => {
    //Arrange
    const password = "Casa";
    //Act
    const result = passwordValidator(password);
    //Assert
    expect(result).toBeFalsy();
  });

  it.skip("comprueba si le falta una letra mayúsucla a la contraseña", () => {
    //Arrange
    const password = "pacomerte";
    //Act
    const result = passwordValidator(password);
    //Assert
    expect(result).toBeFalsy();
  });

  it.skip("comprueba si le falta una letra minúscula a la contraseña", () => {
    const password = "PACOMERTE";
    const result = passwordValidator(password);
    expect(result).toBeFalsy();
  });

  it.skip("comprueba que le falta una barra baja a la contraseña", () => {
    const password = "paCormete";
    const result = passwordValidator(password);
    expect(result).toBeFalsy();
  });

  it.skip("comprueba que le falta una barra baja a la contraseña", () => {
    const password = "pa_Cormete";
    const result = passwordValidator(password);
    expect(result).toBeTruthy();
  });

  it("comprueba que la contraseña es menor de 8 caracteres", () => {
    const password = "Pa_com";
    const result = passwordValidator(password);
    expect(result).toBe("The problem is the lenght");
  });
});
