import sinon from "sinon";

export function testRpc(spy: sinon.SinonSpy, response = null) {
  return {
    request: spy
  };
}

export const testSnap = (test: Tap.Test) => (message: string) => (value: any) => test.matchSnapshot(value, message);

export const testParams = (test: Tap.Test, spy: sinon.SinonSpy) => (params: any, message: string) => (result: any) => {
  test.ok(spy.calledWith(...params), message);
  return result;
};

export const wrapMockResponse = (value: string) =>
  Promise.resolve({
    json: () => ({ result: { response: { value } } })
  });
