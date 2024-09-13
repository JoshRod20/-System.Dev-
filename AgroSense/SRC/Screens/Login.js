import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export default function Login({ }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrarse</Text>

            {/* Campo Nombre con icono */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-usuario-48.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#A5C79C"
                />
            </View>

            {/* Campo Número de teléfono */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-teléfono-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Número de teléfono"
                    value={phone}
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                    placeholderTextColor="#A5C79C"
                />
            </View>

            {/* Campo Correo Electrónico con icono de Google */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-logo-de-google-48.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholderTextColor="#A5C79C"
                />
            </View>

            {/* Campo Contraseña con icono */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-contraseña-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    placeholderTextColor="#A5C79C"
                />
            </View>

            {/* Botón de Iniciar */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 24,
        color: "#4C8A2E",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#A5C79C",
        borderRadius: 5,
        marginBottom: 16,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    button: {
        width: "80%",
        padding: 15,
        backgroundColor: "#4C8A2E",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
