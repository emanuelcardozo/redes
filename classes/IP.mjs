export default class IP {
  constructor(ip, mask) {
    this.ip = ip
    this.mask = mask
  }

  getStringArrayIP() {
    return this.ip.split('.')
  }

  getArrayOf(converter) {
    return converter && this.getStringArrayIP().map(converter)
  }

  getBinaryArrayIP() {
    return this.getArrayOf(this.toBinary)
  }

  getIntArrayIP() {
    return this.getArrayOf(Number)
  }

  toBinary(number) {
    return parseInt(number, 2)
  }

  toInt(string) {
    return parseInt(string, 2)
  }

  isValid() {
    const parsedIP = this.getIntArrayIP()

    return parsedIP && parsedIP.length === 4 && !parsedIP.some(oct => oct<0 || oct>255)
  }

  getIntMask(){
    const oneQuantity = Number(this.mask)
    const zeroQuantity = 32 - Number(this.mask)
    const stringMask = "1".repeat(oneQuantity) + "0".repeat(zeroQuantity)

    return [
      this.toInt(stringMask.slice(0, 8)),
      this.toInt(stringMask.slice(8, 16)),
      this.toInt(stringMask.slice(16, 24)),
      this.toInt(stringMask.slice(24))
    ]
  }

  getNetworkIP(){
    const intIP = this.getIntArrayIP()
    const intMask = this.getIntMask()

    return intIP.map((octIP, i) => octIP & intMask[i]).join('.')
  }
}