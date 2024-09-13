import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
return (
    <View style={styles.container}>
        <Text>Bienvenido a la pantalla de inicio</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
