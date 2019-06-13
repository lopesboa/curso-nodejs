const { readFile } = require("fs");

const { promisify } = require("util");
const readFileAsync = promisify(readFile);

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
  writeFile() {}
  async read(id) {
    const data = await this.getDataFile();
    const filteredData = data.filter(item => (id ? item.id === id : true));
    return filteredData;
  }
}

module.exports = new Database();
