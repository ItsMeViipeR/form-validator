"use strict";
/// <reference path="form-validator.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
const utils_1 = require("./utils");
class FormValidator {
  constructor() {}
  email(email) {
    return (0, utils_1.isGoodEmail)(email);
  }
}
exports.FormValidator = FormValidator;
