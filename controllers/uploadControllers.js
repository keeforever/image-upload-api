const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("cloudinary");

const { BadRequest } = require("../errors");

const imageValidation = async (req, res, next) => {
  // file check
  if (!req.files) {
    throw new BadRequest("Please provided image !");
  }

  // file type
  if (!req.files.image.mimetype.startsWith("image")) {
    throw new BadRequest("Please provide image file!");
  }

  // max size in bits
  const maxSize = 1024 * 1000;

  if (req.files.image.size > maxSize) {
    throw new BadRequest("Upload image size less than 1Mb .");
  }

  next();
};

const uploadCloudImage = async (req, res) => {
  const image = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: "file-upload",
  });
  fs.unlinkSync(req.files.image.tempFilePath)
  res.status(StatusCodes.OK).json({ image: { src: image.secure_url } });
};

module.exports = { uploadCloudImage,imageValidation};
