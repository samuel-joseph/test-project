import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("This text");
  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput
          placeholder="Course Goals"
          style={{ borderBottomColor: "black", borderBottomWidth: 2 }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
