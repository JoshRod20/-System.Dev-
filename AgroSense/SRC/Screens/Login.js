import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login({ }) {

return (
    <View style={styles.container}>
        <Text>Login</Text>
    </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    },
input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    borderRadius: 5,
    },
});
