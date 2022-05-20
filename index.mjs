import IPv4 from "./classes/IPv4.mjs";

const ipv4 = new IPv4(process.argv[2], process.argv[3]);

console.log({
  ip: ipv4.ip,
  class: ipv4.getIPClass(),
  mask: ipv4.mask,
  networkIP: ipv4.getNetworkIP(),
  isValidIP: ipv4.isValidIP(),
  isPrivate: ipv4.isPrivate(),
})

