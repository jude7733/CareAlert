import { Button, Card, Text } from "tamagui";
import RNBeep from 'react-native-a-beep';

export const PatientCard = ({ data, pname }) => {
  // useEffect(() => {
  //   RNBeep.beep();
  // }),[data?.alert]
  const alert = data?.alert == true ? "Need Attention" : "Stable";
  return (
    <Button asChild onPress={ () => {RNBeep.beep()}}>
      <Card size="$5" alignItems="center" justifyContent="center" p="$4">
        <Card.Header>
          <Text fontSize={30} color="orange" m="2">{pname}</Text>
        </Card.Header>
        <Text color={data?.alert ? "red" : "lightgreen"}>{alert}</Text>
        <Text>breath rate : {data?.breathRate}</Text>
        <Text>heart rate : {data?.["heart-rate"]}</Text>
        <Text>temperature : {data?.temperature}</Text>
          <Text>spO2 : {data?.spo2}</Text>
      </Card>
    </Button>
  );
};
