const { get } = require("axios");
const URL = `https://swapi.co/api/people`;

async function getPeople(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const result = await get(url);

  return result.data.results.map(mapPeaople);
}

function mapPeaople(item) {
  return {
    name: item.name,
    weight: item.height
  };
}

module.exports = { getPeople };
