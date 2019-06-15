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

module.exports = ICrud;
