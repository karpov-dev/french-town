import {IIdentity} from "./IIdentity";

export interface IWorkAreaItem extends IIdentity{
  name: string
  costFrom: string | number
}