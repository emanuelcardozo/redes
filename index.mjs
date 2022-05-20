import IPv4 from "./IPv4.mjs";

const ipv4 = new IPv4(process.argv[2]);

console.log({
  ip: ipv4.currentIP,
  isValidIP: ipv4.isValidIP(),
  class: ipv4.getIPClass(),
  isPrivate: ipv4.isPrivate(),
})