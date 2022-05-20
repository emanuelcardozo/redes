import { CLASS_B } from "../constants.mjs"
import AbstractIPClass from "./AbstractIPClass.mjs"

export default class IPClassB extends AbstractIPClass {
  constructor() {
    super()
    
    this.addressFrom = CLASS_B.default.from
    this.addressTo = CLASS_B.default.to
    this.privateAddressFrom = CLASS_B.private.from
    this.privateAddressTo = CLASS_B.private.to
  }
}