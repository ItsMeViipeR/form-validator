import { isGoodEmail } from "./utils";

export class FormValidator {
  constructor() {}

  public email(email: string): boolean {
    return isGoodEmail(email);
  }
}
