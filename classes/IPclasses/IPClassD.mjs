import { CLASS_D } from "../../constants.mjs"
import AbstractIPClass from "./AbstractIPClass.mjs"

export default class IPClassD extends AbstractIPClass {
  constructor() {
    super()

    this.addressFrom = CLASS_D.default.from
    this.addressTo = CLASS_D.default.to
    this.privateAddressFrom = CLASS_D.private.from
    this.privateAddressTo = CLASS_D.private.to
  }
}