import {IWorkAreaItem} from "./IWorkAreaItem";
import {IIdentity} from "./IIdentity";

export interface IWorkArea extends IIdentity {
  name: string
  types: Array<IWorkAreaItem>
  order: number
}