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

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
                leftIcon={{ type: 'font-awesome', name: 'user' }} // Ejemplo de ícono
            />

            <TextInput
                style={styles.input}
                placeholder="Número de teléfono"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={setPhone}
            />

            <View style={styles.emailContainer}>
                <Image source={require('../Assets/icons8-logo-de-google-48.png')} style={styles.googleIcon} />
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Correo electrónico"
                        value={email}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
            </View>

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />

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
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#A5C79C",
        marginBottom: 16,
        borderRadius: 5,
    },
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        marginBottom: 16,
    },
    inputEmail: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: "#A5C79C",
        borderRadius: 5,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
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
    footerImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginTop: 20,
},
});
