require('dotenv').config();

const express = require("express")
const salesForceRoutes = require("./routes/salesForceAuth")
const mongoose = require('mongoose')
// Express app
const app = express()


//Mongo DB connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_URI).then(() => {
  console.log("Mongo DB is connected")
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


// Listen for request
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})
