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
                <Image source={require('../Assets/icons8-usuario-de-género-neutro-48.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#9EAD6E"
                />
            </View>

            {/* Campo Número de teléfono */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-teléfono-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Número de telefono"
                    value={phone}
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                    placeholderTextColor="#9EAD6E"
                />
            </View>

            {/* Campo Correo Electrónico */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-logo-de-google-48.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="correo electronico"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholderTextColor="#9EAD6E"
                />
            </View>

            {/* Campo Contraseña con icono */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-contraseña-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="contraseña"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    placeholderTextColor="#9EAD6E"
                />
            </View>

            {/* Botón de Iniciar */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>

            {/* Imagen inferior */}
            <Image source={require('../Assets/Agro.png')} style={styles.bottomImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 24,
        color: "#4A6B3E",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "85%",  
        height: 50,  
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: "#9EAD6E",
        borderRadius: 25,
        marginBottom: 16,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: "100%",  // Ajustar la altura del campo de texto al contenedor
        paddingVertical: 0,  // Eliminar padding vertical para centrar mejor el texto
        fontSize: 16,   // Ajustar el tamaño de la fuente
        paddingLeft: 10,  // Aumentar el padding para un mejor espaciado
        color: "#4A6B3E", // Color del texto
    },
    button: {
        width: "85%",    // Ancho ajustado del botón
        height: 50,      // Altura del botón
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4A6B3E",
        borderRadius: 25,  // Bordes redondeados del botón
        marginTop: 20,    
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    bottomImage: {
        width: "115%",
        height: 300,
        marginTop:85,
        resizeMode: "contain",
        position: "relative",
        bottom: 0,
    },
});
