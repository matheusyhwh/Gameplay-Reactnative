import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function SignIn() {
  const [ text, setText ] = useState("");

  return (
    <View style={styles.container}>
      <Text>Gameplay</Text>

      <TextInput 
        style={styles.input} 
        onChangeText={setText} 
      />

      <Text>Vc digitou {text} 
      </Text>
    </View>
  );
}
