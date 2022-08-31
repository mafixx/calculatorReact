import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';

export default function App() {
  const [operation, setOperation] = useState("");
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("");

  function handleOperation(operation: string){
    setOperation(operation);
  }

  function handleNumberPress (number: string) {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displaySecondNum}>
          {secondNum} <Text style={styles.displayOperation}>{operation}</Text> 
        </Text>
        <Text style={styles.displayFirstNum}>{firstNum}</Text>
      </View>
      <View style={styles.row}>
        <Button text="AC" onPress={() => {}} isGray/>
        <Button text="+/-" onPress={() => handleOperation("+/-")} isGray/>
        <Button text="%" onPress={() => handleOperation("%")} isGray/>
        <Button text="÷" onPress={() => handleOperation("÷")} isOrange/>
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => {}} />
        <Button text="8" onPress={() => {}} />
        <Button text="9" onPress={() => {}} />
        <Button text="x" onPress={() => handleOperation("x")} isOrange/>
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => {}} />
        <Button text="5" onPress={() => {}} />
        <Button text="6" onPress={() => {}} />
        <Button text="-" onPress={() => handleOperation("-")} isOrange/>
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => {}} />
        <Button text="2" onPress={() => {}} />
        <Button text="3" onPress={() => {}} />
        <Button text="+" onPress={() => handleOperation("+")} isOrange/>
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={() => {}} />
        <Button text="," onPress={() => {}} />
        <Button text="." onPress={() => {}} />
        <Button text="=" onPress={() => handleOperation("=")} isOrange/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    maxWidth: "100%",
    flexDirection: "row",
  },
  display:{
    height: 120,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#fff",
  },
  displaySecondNum:{
    color: "#fff",
    fontSize: 40,
    fontWeight: "200",
    textAlign: "right",
    alignSelf: "flex-end",
    // fontFamily: "SF Pro Display", // Vide documentação
  },
  displayFirstNum:{
    fontSize: 96,
    fontWeight: "200",
    color: "#fff",
  },
  displayOperation:{
    color: "yellow",
    fontSize: 30,
    fontWeight: "500"
  }
});
