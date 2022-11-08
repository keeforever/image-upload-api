require('dotenv').config()
require('express-async-errors')

// express setup
const express = require('express')
const app=express()
const fileUpload = require("express-fileupload")
// db setup
const connectDB = require('./db/connect')

// cloudinary setup
const cloudinary = require("cloudinary").v2
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(fileUpload({useTempFiles:true}))

// routes
const productsRouter = require("./routes/productRoutes")

app.use("/api/v1/products",productsRouter)

app.get('/',(req,res)=>{
  res.send('file upload.')
})

// errors
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

app.use(notFoundMiddleware)
app.use(errorMiddleware)


// port
const port = process.env.PORT || 5000

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    console.log(`Mongo DB connected successfully.`)

    app.listen(port,()=>{
      console.log(`Port ${port} connected successfully.`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
