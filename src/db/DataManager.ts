import {DataSelector} from "./DataSelector";

export class DataManager {

  private static readonly CACHE: any = {};

  public static readonly COLLECTIONS = {
    SERVICE: 'auto-service',
    HEADER_MENU: 'menu',
    SLIDER: 'slider',
    SOCIAL_MEDIA: 'social-media',
    WORK_AREA: 'work-area',
    WORK_AREA_TYPES: 'work-area/{doc}/types'
  }

  public static async getCollection(collectionName: string): Promise<any> {
    return this.CACHE.hasOwnProperty(collectionName)
      ? this.CACHE[collectionName]
      : this.selectAndCache(collectionName);
  }

  private static async selectAndCache(collectionName: string) {
    this.CACHE[collectionName] = DataSelector.getData(collectionName);

    return this.CACHE[collectionName];
  }

}