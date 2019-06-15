class NotImplementedException extends Error {
  constructor() {
    super('Not Implemented Exception');
  }
}

class ICrud {
  create(item) {
    throw new this.NotImplementedException();
  }

  read(query) {
    throw new this.NotImplementedException();
  }

  update(id, item) {
    throw new this.NotImplementedException();
  }

  delete(id) {
    throw new this.NotImplementedException();
  }
}

class MongoDB extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log('O item foi salvo em MongoDB');
  }
}

class Postgres extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log('O item foi salvo em Postegres');
  }
}

class ContextStrategy extends ICrud {
  constructor(strategy) {
    super();
    this._database = strategy;
  }

  create(item) {
    return this._database.create(item);
  }

  read(query) {
    return this._database.read(query);
  }

  update(id, item) {
    return this._database.read(id, item);
  }

  delete(id) {
    return this._database.delete(id);
  }
}

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();
