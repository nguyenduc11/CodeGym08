import { describe, expect, test } from "@jest/globals";
import { Calculator } from "../app";
describe("testCalculator", () => {
  test("testAddition", () => {
    let a = 0;
    let b = 10;
    let expected = 10;
    expect(Calculator.add(a, b)).toEqual(expected);
  });
  test("testSubtraction", () => {
    let a = 10;
    let b = 6;
    let expected = 4;
    expect(Calculator.subtract(a, b)).toEqual(expected);
  });
  test("testMultiply", () => {
    let a = 2;
    let b = 5;
    let expected = 10;
    expect(Calculator.multiply(a, b)).toEqual(expected);
  });
  test("testDivision", () => {
    let a = 100;
    let b = 20;
    let expected = 5;
    expect(Calculator.divide(a, b)).toEqual(expected);
  });
});
