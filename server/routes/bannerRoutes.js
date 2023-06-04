const { Router } = require('express')
const {
  getAllBanner
} = require('./../controllers/bannerController')

const router = Router()

// guest routes banners
router.get('/banners', getAllBanner)

module.exports = router