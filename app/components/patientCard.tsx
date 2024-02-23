import { Button, Card, Text } from "tamagui";
import { writeUserData } from "../firebase/config";

export const PatientCard = ({ data, pname }) => {
  const alert = data?.alert == true ? "Need Attention" : "Stable";
  const snoozeAlert = () => {
    writeUserData(pname, { alert: false });
  }
  return (
    <Card size="$5" alignItems="center" justifyContent="center" p="$4">
        <Card.Header>
          <Text fontSize={30} color="orange" m="2">{pname}</Text>
        </Card.Header>
        <Text color={data?.alert ? "red" : "lightgreen"}>{alert}</Text>
        <Text>breath rate : {data?.breathRate}</Text>
        <Text>heart rate : {data?.["heart-rate"]}</Text>
        <Text>temperature : {data?.temperature}</Text>
          <Text>spO2 : {data?.spo2}</Text>
        {data?.alert && <Button onPress={snoozeAlert}><Text>Snooze</Text>
    </Button>}
      </Card>
  );
};
