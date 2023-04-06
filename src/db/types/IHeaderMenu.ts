import {IIdentity} from "./IIdentity";

export interface IHeaderMenu extends IIdentity {
  name: string,
  link: string,
  order: number
}