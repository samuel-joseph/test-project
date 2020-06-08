import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    console.log(enteredGoal);
  };
  return (
    <View style={styles.padding}>
      <View style={styles.TextHolder}>
        <TextInput
          placeholder="Course Goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.TextInput}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 30,
  },
  TextHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextInput: {
    borderColor: "black",
    borderWidth: 1,
  },
});
