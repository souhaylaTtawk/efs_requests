const express = require('express')
const app = express()
var axios = require('axios');
const port = 3000

app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: true
}));

//efs
var config = {
    method: 'post',
    url: 'https://ojesfuatess-vip.mtn.com.ng:9012/MTNN-OSB-Project/RequesterABCS/GetCustomerProfileDetails/GetCustomerProfileDetailsESFReqABCSPS/GetCustomerProfileDetailsESFReqABCSPS',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log("*****EFS URL*********");
    console.log(config.url);
    console.log("*****EFS Response*********");
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("*****EFS Error*********");
    console.log(error);
  });




  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })