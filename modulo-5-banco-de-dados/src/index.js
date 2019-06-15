const ContextStrategy = require('./db/strategy/base/contextStrategy');
const MongoDB = require('./db/strategy/mongodb');
const Postgres = require('./db/strategy/postegres');

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();
