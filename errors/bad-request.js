const {StatusCodes} = require("http-status-codes")

class BadRequest extends Error {
  constructor(message){
    super(message)
    this.status = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest