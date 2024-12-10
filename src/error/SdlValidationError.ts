import { ValidationError } from "./ValidationError";

/**
 * Represents an SDL validation error.
 * Extends the base `ValidationError` class.
 */
export class SdlValidationError extends ValidationError {
  /**
   * Asserts a condition and throws an `SdlValidationError` if the condition is false.
   * @param condition - The condition to assert.
   * @param message - The error message to throw if the assertion fails.
   * @example
   * SdlValidationError.assert(someCondition, "Condition failed");
   */
  static assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
      throw new SdlValidationError(message);
    }
  }

  /**
   * Creates an instance of `SdlValidationError`.
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = "SdlValidationError";
  }
}
