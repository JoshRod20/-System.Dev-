import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

    export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Estados para manejo de errores
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleLogin = () => {
        // Reinicia los errores antes de validar
        setEmailError(!email);
        setPasswordError(!password);

        // Si algún campo está vacío, no procedemos
        if (!email || !password) {
        return;
        }

        // Si los campos están correctos, se puede proceder con la autenticación
        console.log("Email:", email, "Password:", password);

        // Puedes agregar una acción de éxito, como navegar a otra pantalla
        // Ejemplo: navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        {/* Campo Correo */}
        <View style={[styles.inputContainer, emailError && styles.inputError]}>
            <Image source={require('../../Assets/icons8-logo-de-google-48.png')} style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#4A6B3E"
            />
        </View>

        {/* Campo Contraseña */}
        <View style={[styles.inputContainer, passwordError && styles.inputError]}>
            <Image source={require('../../Assets/icons8-contraseña-50.png')} style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#4A6B3E"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image source={require('../../Assets/icons8-visible-48.png')} style={styles.eyeIconImage} />
            </TouchableOpacity>
        </View>

        {/* Botón de Iniciar */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>

        {/* Imagen inferior en el footer */}
        <Image source={require('../../Assets/Agro.png')} style={styles.bottomImage} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo el espacio disponible
        justifyContent: "center", // Centra el contenido verticalmente
        alignItems: "center", // Centra el contenido horizontalmente
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
    inputError: {
        borderColor: "red", // Cambia el borde a rojo si hay un error
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: "100%",
        fontSize: 16,
        paddingLeft: 10,
        color: "#4A6B3E",
    },
    button: {
        width: "85%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4A6B3E",
        borderRadius: 25,
        marginTop: 0,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    eyeIconImage: {
        width: 24,
        height: 24,
    },
    bottomImage: {
        width: "200%",
        height: 240,
        resizeMode: "contain",
        position: "absolute",
        bottom: 0, // Posiciona la imagen en la parte inferior
    },
    });
