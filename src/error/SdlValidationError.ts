import { ValidationError } from "./ValidationError";

export class SdlValidationError extends ValidationError {
  static assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
      throw new SdlValidationError(message);
    }
  }

  constructor(message: string) {
    super(message);
    this.name = "SdlValidationError";
  }
}
