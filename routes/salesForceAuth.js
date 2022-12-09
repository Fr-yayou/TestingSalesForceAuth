const express = require('express')
const utils = require ('../utils');

const router = express.Router()

router.get ('/auth', async (req, res) => {
    try {
      res.redirect (utils.request_get_auth_code_url);
    } catch (error) {
      res.sendStatus (500);
    }
});

router.get ('/api/callback', async (req, res) => {
    const authorization_token = req.query.code;

    try {
      const response = await utils.get_access_token(authorization_token)
      console.log(response)
      console.log(response.data.access_token)
    } catch (error) {
      res.sendStatus(500)
    }

});

module.exports = router