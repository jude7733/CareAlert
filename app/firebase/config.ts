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
  authDomain: "carealert-4502b.firebaseapp.com",
  databaseURL: "https://carealert-4502b-default-rtdb.firebaseio.com/",
  projectId: "carealert-4502b",
  storageBucket: "carealert-4502b.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
import { ref, set } from "firebase/database";

export function writeUserData(userId: string) {
  set(ref(database, "/" + userId), {
    motion: "bad",
    name: "jude",
    vitals: "normal",
  });
}
