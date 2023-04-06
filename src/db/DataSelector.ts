import {Database} from "./Database";
import {collection, Firestore, getDocs} from "firebase/firestore";

export class DataSelector {

  private static db: Firestore = Database.getInstance();

  public static async getData(collectionName: string) {
    const records = await getDocs(collection(this.db, collectionName));

    return records.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
  }

}