export class CustomValidationError extends Error {
  static assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
      throw new CustomValidationError(message);
    }
  }

  constructor(message: string) {
    super(message);
    this.name = "CustomValidationError";
  }
}
