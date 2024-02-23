import { Button, Card, Text, View } from "tamagui";
import { database } from "../firebase/config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const userStatsRef = ref(database, '/');
    onValue(userStatsRef, (snapshot) => {
      const info = snapshot.val();
     console.log(info);
      setData(info); 
    });
  }, []);

  return (
    <View flex={1} justifyContent="center" gap="$4" alignItems="center">
      <Text fontSize={30}>{data?.p1?.name}</Text>
      <Card size="$5">
        <Card.Header>
          <Text>motion {data?.p1.motion}</Text>
          <Text>vitals {data?.p1.vitals}</Text>
        </Card.Header>
      </Card>
    </View>
  );
}
