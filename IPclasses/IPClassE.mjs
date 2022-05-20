import { CLASS_E } from "../constants.mjs"
import AbstractIPClass from "./AbstractIPClass.mjs"

export default class IPClassE extends AbstractIPClass {
  constructor() {
    super()

    this.addressFrom = CLASS_E.default.from
    this.addressTo = CLASS_E.default.to
    this.privateAddressFrom = CLASS_E.private.from
    this.privateAddressTo = CLASS_E.private.to
  }
}