import {Firestore, getFirestore} from 'firebase/firestore'
import {initializeApp} from "firebase/app";

export class Database {

  private static CONFIG = {
    apiKey: "AIzaSyCv0E1CTClqjLtIoUzZkmk4rGP_iCNe2xA",
    authDomain: "french-town-1d5fa.firebaseapp.com",
    projectId: "french-town-1d5fa",
    storageBucket: "french-town-1d5fa.appspot.com",
    messagingSenderId: "341310462216",
    appId: "1:341310462216:web:d4fd80b8e2e7695bb0f4bd",
    measurementId: "G-FY3X87Z1SK"
  }

  private static db: Firestore

  public static getInstance(): Firestore {
    Database.db = this.db
      ? this.db
      : Database.initialize();

    return this.db;
  }

  private static initialize(): Firestore {
    const app = initializeApp(Database.CONFIG);

    return  getFirestore(app);
  }

}