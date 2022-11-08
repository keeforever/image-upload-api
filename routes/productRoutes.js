const {Router} = require('express')
const router = Router()

const {createProducts,getProducts} = require('../controllers/productControllers')
const {uploadCloudImage,imageValidation} = require("../controllers/uploadControllers")

router.route('/').get(getProducts).post(createProducts)
router.route('/uploads').post(imageValidation,uploadCloudImage)

module.exports = router