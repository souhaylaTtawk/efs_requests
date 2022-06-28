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

// let serverIP = "10.197.12.9"
// let portNumber = 8443
// let msisdn = 7838398093
// let username =""
// let password = ""
// let iname =""
// let input ="BCHK_NG_Data_4504"
// let clientTransactionId = 234872789
// let user_id = "FN99999@fn.mtn.com"
// let nonGsm=true



//efs 1
var config = {
    method: 'post',
    url: 'https://ojesfuatess-vip.mtn.com.ng:9012/MTNN-OSB-Project/RequesterABCS/GetCustomerProfileDetails/GetCustomerProfileDetailsESFReqABCSPS/GetCustomerProfileDetailsESFReqABCSPS',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log("*******EFS CustomerProfileDetails URL*********");
    console.log(config.url);
    console.log("*******EFS CustomerProfileDetails Response*********");
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("*****EFS CustomerProfileDetails Error*********");
    console.log(error.message);
  });

//efs 2
var config = {
  method: 'post',
  url : ' https://ojesfsit-vip.mtn.com.ng:8012/MTNN_GetSubscriberDetails/ProxyService/GetSubscriberDetailsPS',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log("*********EFS SubscriberDetails URL*********");
  console.log(config.url);
  console.log("*********EFS SubscriberDetails Response*********");
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log("*****EFS SubscriberDetails Error*********");
  console.log(error.message);
});

//cis1
// var config = {
//   method: 'post',
//   url: `https://${serverIP}:${portNumber}/cisBusiness/service/fulfillmentService?msisdn=${msisdn}&username=${username}&password=${password}&iname=${iname}&input=${input}&clientTransactionId=${clientTransactionId}` ,
//   headers: { }
// };
// axios(config)
// .then(function (response) {
//   console.log("*******CIS with MISDN URL*********");
//   console.log(config.url);
//   console.log("*******CIS with MISDN Response*********");
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log("*****CIS with MISDN Error*********");
//   console.log(error.message);
// });

//cis2
// var config = {
//   method: 'post',
//   url:`https://${serverIP}:${portNumber}/cisBusiness/service/fulfillmentService?user_id=${user_id}&nonGsm=${nonGsm}&username=${username}&password=${password}&iname=${iname}&input=${input}&clientTransactionId=${clientTransactionId}`,
//   headers: { }
// };
// axios(config)
// .then(function (response) {
//   console.log("*******CIS without MISDN URL*********");
//   console.log(config.url);
//   console.log("*******CIS without MISDN Response*********");
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log("*****CIS without MISDN Error*********");
//   console.log(error.message);
// });

  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })