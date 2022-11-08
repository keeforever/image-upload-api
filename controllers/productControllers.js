const Product = require('../model/Product')
const {StatusCodes} = require('http-status-codes')

const getProducts = async (req,res)=>{
  const products = await Product.find({})
  res.status(StatusCodes.ACCEPTED).json({products : products})
}

const createProducts = async(req,res)=>{
  const product = await Product.create(req.body)
  res.status(StatusCodes.ACCEPTED).json({data : product})
}

module.exports = {getProducts,createProducts}