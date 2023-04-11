import {DataSelector} from "./DataSelector";
import {IHeaderMenu, IService, ISlide, ISocialMedia, IWorkArea} from "./types";
import {ISetting} from "./types/ISetting";

export class DataManager {

  public static readonly COLLECTIONS = {
    SERVICE: 'auto-service',
    HEADER_MENU: 'menu',
    SLIDE: 'slider',
    SOCIAL_MEDIA: 'social-media',
    WORK_AREA: 'work-area',
    WORK_AREA_TYPES: 'work-area/{doc}/types',
    SETTINGS: 'settings'
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

  public static async getSlides(): Promise<Array<ISlide>> {
    return (await DataManager.getCollection(DataManager.COLLECTIONS.SLIDE));
  }

  public static async getSettings(): Promise<ISetting> {
    return (await DataManager.getCollection(DataManager.COLLECTIONS.SETTINGS))?.[0];
  }

  public static async getCollection(collectionName: string): Promise<any> {
    const isCollectionCached = sessionStorage.getItem(collectionName);

    if (!isCollectionCached) {
      sessionStorage.setItem(collectionName, JSON.stringify(await DataSelector.getData(collectionName)));
    }

    // @ts-ignore
    return JSON.parse(sessionStorage.getItem(collectionName));
  }

}