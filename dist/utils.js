"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGoodEmail = void 0;
const isGoodEmail = (email) => {
    const emailRegex = /^[\w-\.]+(\+[\w-]+)?@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
};
exports.isGoodEmail = isGoodEmail;
