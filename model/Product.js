
const {Schema,model} = require('mongoose')

const ProductSchema = new Schema({
  name : {
    type : String,
    required : [true, "Name must be provided !"]
  },
  price : {
    type : Number,
    required : [true, "Price must be provided !"]
  },
  image : {
    type : String
  }
})

const productModel = model('product',ProductSchema)

module.exports = productModel