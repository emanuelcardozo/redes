import IP from "./IP.mjs";

const ip = new IP(process.argv[2], process.argv[3]);

console.log(ip.getNetworkIP())

// console.log({
//   ip: ipv4.currentIP,
//   isValidIP: ipv4.isValidIP(),
//   class: ipv4.getIPClass(),
//   isPrivate: ipv4.isPrivate(),
// })

