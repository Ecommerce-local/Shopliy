const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const bannerRoutes = require('./routes/bannerRoutes')
const { isAuthenticated, checkUser, isAdmin } = require('./middleware/auth')
const cors = require('cors')
require('dotenv').config({path:__dirname+'\\.env'})
// TODO : in all catch fields , return internal server error if not predefined err
const wishlistRoutes = require('./routes/wishlistRoutes')
const { checkUser } = require('./middleware/auth')
// const cors = require('cors')
// require('dotenv').config()

const app = express()

// middlewares

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.use(express.json()) // parse incoming requests with JSON payloads
app.use(cookieParser())

// environment variables
const port = process.env.PORT || 3000
const dbURI =
  'mongodb://127.0.0.1:27017/shopliy'

// Connecting to db
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB!')
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`)
  })

app.all('*', checkUser) // to get access to user info in all views

app.use(authRoutes)
app.use(userRoutes)
app.use(categoryRoutes)
app.use(productRoutes)
app.use(cartRoutes)
app.use(orderRoutes)
app.use(bannerRoutes)
app.use(wishlistRoutes)
