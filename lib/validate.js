import { validate } from "validator";
export function isEmail(text) {
    return validate.isEmail(text);
}

