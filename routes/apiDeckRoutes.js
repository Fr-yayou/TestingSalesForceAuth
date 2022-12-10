const express = require('express')
const apiDeckConsumer = require('../models/apiDeckConsumer')
const { Apideck } = require('@apideck/node')
const axios = require("axios");

const router = express.Router()


router.post ('/apideck/create/consumer', async (req, res) => {
    const { consumerId, firstName } = req.body

    try {
        const consumer = await apiDeckConsumer.create({firstName,consumerId})

        new Apideck({
            apiKey: process.env.API_DECK_API_KEY,
            appId: process.env.API_DECK_APP_ID,
            consumerId: consumerId
        })

        const sessionCreation = await  axios.post("https://unify.apideck.com/vault/sessions",{},{
            headers: {
                "Authorization": "Bearer sk_live_c52ec791-b3c4-46b3-aaec-8b307cd4095b-kE51bsxQtCdhQxsa1RGZ-ee124cbd-1f77-4872-8ad5-fb4331641c33",
                "x-apideck-app-id": "BSrykoUPKGaOQ1RGZ6QS8ksajktSUQET1RGZ",
                "x-apideck-consumer-id": consumerId
            }

        })

        res.status(200).json(sessionCreation.data )
    } catch (error) {
        console.log(error)
    }

});

module.exports = router