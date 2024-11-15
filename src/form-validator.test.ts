import { expect, test, describe } from "vitest";
import { FormValidator } from ".";

const formValidator = new FormValidator();

describe("FormValidator email validation", () => {
  describe("Valid emails", () => {
    test("should return true for standard valid emails", () => {
      expect(formValidator.email("my.email@gmail.com")).toBe(true);
      expect(formValidator.email("user.name@domain.co")).toBe(true);
      expect(formValidator.email("user_name@domain.com")).toBe(true);
    });

    test("should return true for valid emails with subdomains", () => {
      expect(formValidator.email("user@sub.domain.com")).toBe(true);
      expect(formValidator.email("user@sub.sub.domain.com")).toBe(true);
    });

    test("should return true for valid emails with plus sign", () => {
      expect(formValidator.email("user+name@domain.com")).toBe(true);
    });
  });

  describe("Invalid emails", () => {
    test("should return false for emails with invalid characters", () => {
      expect(formValidator.email("my,email@invalid.com")).toBe(false);
      expect(formValidator.email("user@domain")).toBe(false);
    });

    test("should return false for emails with missing parts", () => {
      expect(formValidator.email("user@.com")).toBe(false);
      expect(formValidator.email("user@domain.c")).toBe(false);
      expect(formValidator.email("@domain.com")).toBe(false);
    });

    test("should return false for emails with consecutive dots", () => {
      expect(formValidator.email("user@domain..com")).toBe(false);
    });

    test("should return false for emails with spaces", () => {
      expect(formValidator.email("user @domain.com")).toBe(false);
      expect(formValidator.email("user@ domain.com")).toBe(false);
    });
  });
});
