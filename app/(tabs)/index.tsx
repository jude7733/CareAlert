import { Button, Card, Text, View } from "tamagui";
import { database } from "../firebase/config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { PatientCard } from "../components/patientCard";

export default function TabOneScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const userStatsRef = ref(database, "/patients");
    onValue(userStatsRef, (snapshot) => {
      const info = snapshot.val();
      delete info.test;
      console.log(info);
      setData(info);
    });
  }, []);
  const users = data != null ? Object.keys(data) : [];
  console.log(users);
  return (
    <View flex={1} justifyContent="center" gap="$4" alignItems="center">
      {users.map((item, key) => (
        <PatientCard data={data?.[item]} pname={item} key={key} />
      ))}
    </View>
  );
}
