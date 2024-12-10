/**
 * Represents a generic validation error.
 * Extends the native `Error` class.
 */
export class ValidationError extends Error {
  /**
   * Asserts a condition and throws a `ValidationError` if the condition is false.
   * @param condition - The condition to assert.
   * @param message - The error message to throw if the assertion fails.
   * @example
   * ValidationError.assert(someCondition, "Condition failed");
   */
  static assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
      throw new ValidationError(message);
    }
  }

  /**
   * Creates an instance of `ValidationError`.
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
