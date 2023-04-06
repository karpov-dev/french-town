import {IIdentity} from "./IIdentity";

export interface ISocialMedia extends IIdentity {
  link: string,

  isPhoneAvailable: boolean
}