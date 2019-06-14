const ICrud = require('./intefaces/interfaceCrud');

class Postgres extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log('O item foi salvo em Postegres');
  }
}

module.exports = Postgres;
