import { 
  IPClassA, 
  IPClassB, 
  IPClassC, 
  IPClassD, 
  IPClassE 
} from "./IPclasses/index.mjs";

export default class IPv4 {
  constructor(ip){
    this.classA = new IPClassA();
    this.classB = new IPClassB();
    this.classC = new IPClassC();
    this.classD = new IPClassD();
    this.classE = new IPClassE();

    this.currentIP = ip && this.parseIP(ip);
  }

  setIP(ip) {
    this.currentIP = this.parseIP(ip)
  }

  parseIP(stringIP) {
    return stringIP.split('.').map(Number)
  }
  
  isValidIP() {
    return this.currentIP && this.currentIP.length === 4 && !this.currentIP.some(oct => oct<0 || oct>255)
  }

  isPrivate() {
    if(!this.isValidIP()) return false

    const ipClass = this.getIPClass()

    switch(ipClass) {
      case 'A': return this.classA.isMyPrivateAddress(this.currentIP)
      case 'B': return this.classB.isMyPrivateAddress(this.currentIP)
      case 'C': return this.classC.isMyPrivateAddress(this.currentIP)
      case 'D': return this.classD.isMyPrivateAddress(this.currentIP)
      default: return this.classE.isMyPrivateAddress(this.currentIP)
    }
  }
  
  getIPClass() {
    if(!this.currentIP) return false
  
    if(this.classA.isMyClass(this.currentIP)) return "A"
    if(this.classB.isMyClass(this.currentIP)) return "B"
    if(this.classC.isMyClass(this.currentIP)) return "C"
    if(this.classD.isMyClass(this.currentIP)) return "D"
    
    return "E"
  }
}

