import { ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
import { getDatabase } from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "care-alert-ef06f.firebaseapp.com",
  databaseURL: "https://care-alert-ef06f-default-rtdb.firebaseio.com/",
  projectId: "care-alert-ef06f",
  // storageBucket: "carealert-4502b.appspot.com",
  // messagingSenderId: "sender-id",
  // appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export function writeUserData(userId: string) {
  set(ref(database, "/patients" + userId), {
    motion: "bad",
    name: "jude",
    vitals: "normal",
  });
}
