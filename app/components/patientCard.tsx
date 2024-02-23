import { Button, Card, Text } from "tamagui";
import RNBeep from 'react-native-a-beep';
import { useEffect } from "react";

export const PatientCard = ({ data, pname }) => {
  // useEffect(() => {
  //   RNBeep.beep();
  // }),[data?.alert]
  const alert = data?.alert == true ? "Need Attention" : "Stable";
  return (
    <Button asChild onPress={ () => {RNBeep.beep()}}>
      <Card size="$5" alignItems="center" justifyContent="center" p="$4">
        <Card.Header>
          <Text fontSize={30}>{pname}</Text>
        </Card.Header>
        <Text>{alert}</Text>
      </Card>
    </Button>
  );
};
