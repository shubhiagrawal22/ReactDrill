import { Sum } from "../Sum"


test("sum function should calculate two numbers", () => {
    const result = Sum(3,4);

    //Assertion
    expect(result).toBe(7);
})