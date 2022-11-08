const { BadRequest } = require("../errors");

const notFound = () => {
  throw new BadRequest('Route does not match !!!')
};

module.exports = notFound;
