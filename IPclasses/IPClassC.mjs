import { CLASS_C } from "../constants.mjs"
import AbstractIPClass from "./AbstractIPClass.mjs"

export default class IPClassC extends AbstractIPClass {
  constructor() {
    super()
    
    this.addressFrom = CLASS_C.default.from
    this.addressTo = CLASS_C.default.to
    this.privateAddressFrom = CLASS_C.private.from
    this.privateAddressTo = CLASS_C.private.to
  }
}