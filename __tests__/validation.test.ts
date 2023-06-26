// unit test for validation
import { validateEmail, validatePhone } from "../src/validation.js";
//
describe("validateEmail", () => {
    test("returns true when the email is valid", () => {
        expect(validateEmail("patric.schouler@telekom.de")).toBe(true);
    });
    test("returns false when the email is invalid", () => {
        expect(validateEmail("patric.schouler")).toBe(false);
    }

    );
});
describe("validatePhone", () => {
    test("returns true when the phone is valid", () => {
        expect(validatePhone("+49 (123) 4567-8901")).toBe(true);
    });
    test("returns false when the phone is invalid", () => {
        expect(validatePhone("12345678901")).toBe(false);
    });
}
);



