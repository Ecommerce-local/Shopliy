const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
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