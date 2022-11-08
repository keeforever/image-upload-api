const errorHandler = (err,req,res,next)=>{

  const customError ={
    msg: err.message || 'Something went to wrong Please try again !',
    status : err.status || 501 
  }

  res.status(customError.status).json({msg:customError.msg})
}

module.exports = errorHandler