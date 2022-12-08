const express = require("express")
const utils = require ('./utils');
const dotenv = require('dotenv');
dotenv.config();
const app = express()


app.get('/', async (req, res) => {
    res.send("Hello from server")

})

app.get ('/auth', async (req, res) => {
    try {
      res.redirect (utils.request_get_auth_code_url);
    } catch (error) {
      res.sendStatus (500);
      console.log (error.message);
    }
});

app.get ('/api/callback', async (req, res) => {
    const authorization_token = req.query.code;
    console.log(authorization_token)
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})
