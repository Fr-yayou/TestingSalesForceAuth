const express = require('express')
const utils = require ('../utils');
const salesForce = require('../models/salesForceAuthModel')

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

      const { access_token,refresh_token,instance_url,token_type } = response.data
      const authSalesForce = await salesForce.create({access_token,refresh_token,instance_url,token_type})
      res.status(200).json(authSalesForce)

    } catch (error) {
      res.status(400).json({error: error.message })
    }

});

router.get('/api/salesforce', async (req, res) => {
  const salesForceAuth = await salesForce.find({}).sort({createAt: -1})
  console.log(salesForceAuth)

  try {

  } catch (error) {
    console.log(error)
  }

  console.log(salesForceAuth)
})

module.exports = router