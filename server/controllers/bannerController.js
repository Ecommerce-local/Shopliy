const { HomeBanner } = require('../models/HomeBanner')
const getAllBanner = async (req, res) => {
    try {
      const banners = await HomeBanner.find()
      res.status(200).json({ bannersNo: banners.length, banners })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  module.exports = {getAllBanner}