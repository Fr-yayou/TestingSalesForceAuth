require('dotenv').config();

const bp = require('body-parser')
const express = require("express")
const salesForceRoutes = require("./routes/salesForceAuth")
const apiDeckRoutes = require("./routes/apiDeckRoutes")
const mongoose = require('mongoose')

// Express app
const app = express()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


//Mongo DB connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_URI).then(() => {
  // Listen for request
  app.listen(process.env.PORT, () => {
  console.log(`Connected to Mongo DB and server running at http://localhost:${process.env.PORT}`)
})

}).catch((err) => {
  console.log(err)
})

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Route for Salesforce
app.use(salesForceRoutes)

//Route for apiDeck
app.use(apiDeckRoutes)

