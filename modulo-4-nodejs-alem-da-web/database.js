const { readFile, writeFile } = require("fs");

const { promisify } = require("util");
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// other way to get json data
// const jsonData = require('./filename.json');

class Database {
  constructor() {
    this.FILE_NAME = "herois.json";
  }
  async getDataFile() {
    const file = await readFileAsync(this.FILE_NAME, "utf8");
    return JSON.parse(file.toString());
  }
  async writeFile(data) {
    await writeFileAsync(this.FILE_NAME, JSON.stringify(data));
    return true;
  }

  async create(hero) {
    const data = await this.getDataFile();
    const id = hero.id <= 2 ? hero.id : Date.now();
    const heroWithId = { id, ...hero };
    const finalData = [...data, heroWithId];
    const result = await this.writeFile(finalData);

    return result;
  }

  async read(id) {
    const data = await this.getDataFile();
    const filteredData = data.filter(item => (id ? item.id === id : true));
    return filteredData;
  }

  async update(id, modifications) {
    const data = await this.getDataFile();
    const indice = data.findIndex(item => item.id === parseInt(id));
    if (indice === -1) {
      throw Error("O heroi informado não existe.");
    }

    const actual = data[indice];
    const objectUpdate = { ...actual, ...modifications };
    data.splice(indice, 1);
    return await this.writeFile([...data, objectUpdate]);
  }

  async delete(id) {
    if (!id) {
      return await this.writeFile([]);
    }
    const data = await this.getDataFile();
    const indice = data.findIndex(item => item.id === parseInt(id));
    if (indice === -1) {
      throw Error("O usuário informado não existe.");
    }
    data.splice(indice, 1);
    return await this.writeFile(data);
  }
}

module.exports = new Database();
