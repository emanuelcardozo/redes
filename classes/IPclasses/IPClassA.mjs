import { CLASS_A } from "../../constants.mjs"
import AbstractIPClass from "./AbstractIPClass.mjs"

export default class IPClassA extends AbstractIPClass {
  constructor() {
    super()
    
    this.addressFrom = CLASS_A.default.from
    this.addressTo = CLASS_A.default.to
    this.privateAddressFrom = CLASS_A.private.from
    this.privateAddressTo = CLASS_A.private.to
  }
}