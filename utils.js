const query_string = require ('querystring');
require('dotenv').config()
const axios = require("axios");

const query_params = {
  client_id: process.env.CLIENT_APP_ID,
  redirect_uri: `http://localhost:4000${process.env.REDIRECT_URI}`,
};

const auth_token_params = {
    response_type: 'code',
    ...query_params,
};

const get_access_token = async auth_code => {
  const access_token_params = {
    ...query_params,
    client_secret: process.env.CLIENT_APP_SECRET,
    code: auth_code,
    grant_type: 'authorization_code',
  }

  return await axios ({
    method: 'post',
    url: `${process.env.SALES_FORCE_TOKEN_ENDPOINT}${query_string.stringify (access_token_params)}`,
  })
}


const request_get_auth_code_url = `${process.env.SALES_FORCE_AUTH_ENDPOINT}${query_string.stringify (auth_token_params)}`;
module.exports ={request_get_auth_code_url,get_access_token}