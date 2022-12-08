const query_string = require ('querystring');
const dotenv = require('dotenv');
dotenv.config();


const salesForce_auth_token_endpoint ='https://revenuerythmesandbox-dev-ed.develop.my.salesforce.com/services/oauth2/authorize?';
const query_params = {
  client_id: process.env.CLIENT_APP_ID,
  redirect_uri: `http://localhost:4000${process.env.REDIRECT_URI}`,
};

const auth_token_params = {
    response_type: 'code',
    ...query_params,
};


const request_get_auth_code_url = `${salesForce_auth_token_endpoint}${query_string.stringify (auth_token_params)}`;
module.exports ={request_get_auth_code_url}