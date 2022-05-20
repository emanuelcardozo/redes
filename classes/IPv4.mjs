import IP from "./IP.mjs";
import { 
  IPClassA, 
  IPClassB, 
  IPClassC, 
  IPClassD, 
  IPClassE 
} from "./IPclasses/index.mjs";

export default class IPv4 {
  constructor(ip, mask){
    this.classA = new IPClassA();
    this.classB = new IPClassB();
    this.classC = new IPClassC();
    this.classD = new IPClassD();
    this.classE = new IPClassE();

    this.currentAddress = new IP(ip, mask);
  }

  get ip() {
    return this.currentAddress.ip
  }

  get mask() {
    return this.currentAddress.mask
  }

  setIP(ip, mask) {
    this.currentAddress = new IP(ip, mask);
  }

  isPrivate() {
    if(!this.currentAddress.isValid()) return false

    const ipClass = this.getIPClass()

    switch(ipClass) {
      case 'A': return this.classA.isMyPrivateAddress(this.currentAddress.getIntArrayIP())
      case 'B': return this.classB.isMyPrivateAddress(this.currentAddress.getIntArrayIP())
      case 'C': return this.classC.isMyPrivateAddress(this.currentAddress.getIntArrayIP())
      case 'D': return this.classD.isMyPrivateAddress(this.currentAddress.getIntArrayIP())
      default: return this.classE.isMyPrivateAddress(this.currentAddress.getIntArrayIP())
    }
  }
  
  getIPClass() {
    if(!this.currentAddress.isValid()) return false
  
    console.log(this.currentAddress.getIntArrayIP())
    if(this.classA.isMyClass(this.currentAddress.getIntArrayIP())) return "A"
    if(this.classB.isMyClass(this.currentAddress.getIntArrayIP())) return "B"
    if(this.classC.isMyClass(this.currentAddress.getIntArrayIP())) return "C"
    if(this.classD.isMyClass(this.currentAddress.getIntArrayIP())) return "D"
    
    return "E"
  }

  getNetworkIP() {
    return this.currentAddress.getNetworkIP()
  }

  isValidIP() {
    return this.currentAddress.isValid()
  }
}

