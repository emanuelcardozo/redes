export default class AbstractIPClass {
  addressFrom
  addressTo
  privateAddressFrom
  privateAddressTo

  constructor(){
    if (this.constructor == AbstractIPClass) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  isMyClass(ip) {
    return ip[0]>=this.addressFrom[0] && ip[0]<=this.addressTo[0]
  }

  isMyPrivateAddress(ip) {
    return ip[0]>=this.privateAddressFrom?.[0] && ip[0]<=this.privateAddressTo?.[0]
  }
}