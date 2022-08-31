import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Button } from "../components/Button";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../styles/Colors";

export function Calculator() {
    const [operation, setOperation] = useState("");
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const { theme, toggleTheme } = useTheme();

    const textColor = theme === "dark"
       ? { color: colors.textDark}
       : { color: colors.textLight}
                              

    function handleOperation(operation: string) {
        if (operation === "+/-") {
            setFirstNum(prev => String(-prev));
            return;
        }

        setOperation(operation);
        setSecondNum(firstNum);
        setFirstNum("");
    }

    function handleNumberPress(number: string) {
        if (firstNum.length < 11) {
            if (firstNum === "0") {
                setFirstNum(number);
            } else {
                setFirstNum(firstNum + number);
            }
        }
    }

    function getFirstNum() {
        if (!firstNum) {
            return <Text style={[styles.displayFirstNum, textColor]}>0</Text>
        }

        if (firstNum.length > 6 && firstNum.length <= 8) {
            return <Text style={[styles.displayFirstNum, { fontSize: 70 }, textColor]}>{firstNum}</Text>
        }
        if (firstNum.length > 8) {
            return <Text style={[styles.displayFirstNum, { fontSize: 50 }, textColor]}>{firstNum}</Text>
        }

        return <Text style={[styles.displayFirstNum, textColor]}>{firstNum}</Text>
    }

    function handleBackspace() {
        setFirstNum(firstNum.slice(0, -1));
    }

    function handleClearPress() {
        setFirstNum("");
        setSecondNum("");
        setOperation("");
    }

    function getResult() {
        switch (operation) {
            case "+":
                let result = Number(secondNum) + Number(firstNum);
                handleClearPress();
                setFirstNum(result.toString());
                break;
            case "-":
                result = Number(secondNum) - Number(firstNum);
                handleClearPress();
                setFirstNum(result.toString());
                break;
            case "÷":
                result = Number(secondNum) / Number(firstNum);
                handleClearPress();
                setFirstNum(result.toString());
                break;
            case "x":
                result = Number(secondNum) * Number(firstNum);
                handleClearPress();
                setFirstNum(result.toString());
                break;
            case "%":
                result = Number(secondNum) % Number(firstNum);
                handleClearPress();
                setFirstNum(result.toString());
                break;
            case "+/-":
                break;
            default:
                handleClearPress();
        }
    }
    return (
        <View style={[styles.container,
            theme === "dark"  
            ? { backgroundColor: colors.backgroundDark}
            : { backgroundColor: colors.backgroundLight}
        ]}>
            <Switch
                value={theme === "dark"}
                trackColor={{ false: "orange", true: "#a6a6a6" }}
                onChange={toggleTheme}
                thumbColor="#fff"
            />

            <View style={styles.display}>
                <Text style={[styles.displaySecondNum,
                             textColor
                              ]}>
                    {secondNum} <Text style={styles.displayOperation}>{operation}</Text>
                </Text>
                {getFirstNum()}
            </View>
            <View style={styles.row}>
                <Button text="AC" onPress={() => handleClearPress()} isGray />
                <Button text="+/-" onPress={() => handleOperation("+/-")} isGray />
                <Button text="%" onPress={() => handleOperation("%")} isGray />
                <Button text="÷" onPress={() => handleOperation("÷")} isOrange />
            </View>
            <View style={styles.row}>
                <Button text="7" onPress={() => handleNumberPress("7")} />
                <Button text="8" onPress={() => handleNumberPress("8")} />
                <Button text="9" onPress={() => handleNumberPress("9")} />
                <Button text="×" onPress={() => handleOperation("x")} isOrange />
            </View>
            <View style={styles.row}>
                <Button text="4" onPress={() => handleNumberPress("4")} />
                <Button text="5" onPress={() => handleNumberPress("5")} />
                <Button text="6" onPress={() => handleNumberPress("6")} />
                <Button text="-" onPress={() => handleOperation("-")} isOrange />
            </View>
            <View style={styles.row}>
                <Button text="1" onPress={() => handleNumberPress("1")} />
                <Button text="2" onPress={() => handleNumberPress("2")} />
                <Button text="3" onPress={() => handleNumberPress("3")} />
                <Button text="+" onPress={() => handleOperation("+")} isOrange />
            </View>
            <View style={styles.row}>
                <Button text="." onPress={() => handleNumberPress(".")} />
                <Button text="0" onPress={() => handleNumberPress("0")} />
                <Button text="⌫" onPress={() => handleBackspace()} />
                <Button text="=" onPress={() => getResult()} isOrange />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        maxWidth: "100%",
        flexDirection: "row",
    },
    display: {
        height: 220,
        width: "80%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        color: "#fff",
    },
    displaySecondNum: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "200",
        textAlign: "right",
        alignSelf: "flex-end",

    },
    displayFirstNum: {
        fontSize: 96,
        fontWeight: "200",
        color: "#fff",
    },
    displayOperation: {
        color: "orange",
        fontSize: 30,
        fontWeight: "500"
    },
});
