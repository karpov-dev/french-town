import {IIdentity} from "./IIdentity";
import {IGeopoint} from "./IGeopoint";

export interface IService extends IIdentity {
  address: string,
  phone: string,
  workTime: string,
  description: string,
  email: string,
  geoPoint: IGeopoint
}