const NetworkScanner = require('network-scanner-js')
const dns = require('node:dns');
const netScan = new NetworkScanner()

const config = {
    repeat:4, 
    size:56, 
    timeout:1 
  }
class controller{
    async ping(){
        const poll = await netScan.poll('google.com',config)
        console.log(poll) 
    } 
    async setIP(req, res){      
        const ip = req.body.ip
        console.log(ip);
        dns.lookupService(ip, 22, (err, hostname, service) => {
            res.json(hostname);
        });    
    }
    async getIP(req, res){
        const name = req.body.name
        netScan.poll(name,config).then((result)=>{
          res.json(result)
          })
        } 
              
}
module.exports = new controller()