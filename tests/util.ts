export const testSnap = (test: Tap.Test) => (message: string) => (value: any) => test.matchSnapshot(value, message);
