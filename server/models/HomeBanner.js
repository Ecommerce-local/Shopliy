const { number } = require('joi')
const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
    id:{
      type: Number,
    },
    src: {
      type: String,
      required: true,
    },
    redirect: {
      type: String,
    }
  })
  
  const HomeBanner = mongoose.model('banners', bannerSchema)
  
  module.exports = { HomeBanner }