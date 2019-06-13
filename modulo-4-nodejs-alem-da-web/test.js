const { deepEqual, ok } = require("assert");
const database = require("./database");
const DEFAULT_ITEM_CADASTRAR = {
  name: "flash",
  power: "speed",
  id: 1
};

describe("Suite de manipulação de herois", () => {
  // it("deve cadastrar um heroi, usando arquivos", async () => {
  //   const expected = DEFAULT_ITEM_CADASTRAR;
  //   ok(null, expected);
  // });

  it("deve pesquisar um heroi usando um arquivo ", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [result] = await database.read(expected.id);

    deepEqual(result, expected);
  });
});
