import {DataSelector} from "./DataSelector";
import {IHeaderMenu, IService, ISocialMedia, IWorkArea} from "./types";

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

  public static async getService(): Promise<IService> {
    return (await DataManager.getCollection(DataManager.COLLECTIONS.SERVICE))[0] as IService;
  }

  public static async getSocialMedias(): Promise<Array<ISocialMedia>> {
    return (await DataManager.getCollection(DataManager.COLLECTIONS.SOCIAL_MEDIA)) as Array<ISocialMedia>;
  }

  public static async getMenuItems(): Promise<Array<IHeaderMenu>> {
    return (await DataManager.getCollection(DataManager.COLLECTIONS.HEADER_MENU))?.sort((a: IHeaderMenu, b: IHeaderMenu) => a.order - b.order);
  }

  public static async getWorkAreas(): Promise<Array<IWorkArea>> {
    const workAreas = (await DataManager.getCollection(DataManager.COLLECTIONS.WORK_AREA))?.sort((a: IHeaderMenu, b: IHeaderMenu) => a.order - b.order);

    for (let workArea of workAreas) {
      workArea.types = await DataManager.getCollection(DataManager.COLLECTIONS.WORK_AREA_TYPES.replace('{doc}', workArea.id));
    }

    return workAreas;
  }

  public static async getSlides() {

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