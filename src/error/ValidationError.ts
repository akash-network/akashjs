export class ValidationError extends Error {
  static assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
      throw new ValidationError(message);
    }
  }

  constructor(message: string) {
    super(message);
    this.name = "SdlValidationError";
  }
}
