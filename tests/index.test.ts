import main from "../";

describe("test boilerplate", () => {
  it("should work", () => {
    expect.assertions(1);

    const welcomeMessage = main();

    expect(welcomeMessage).toStrictEqual("Hello Boilerplate !");
  });
});
