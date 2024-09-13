import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar la contraseña
    const [showPassword, setShowPassword] = useState(false);  // Estado para manejar la visibilidad de la contraseña
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para manejar la visibilidad de la confirmación de contraseña

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);  // Alterna la visibilidad de la contraseña
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword); // Alterna la visibilidad de la confirmación de contraseña
    };

    const handleSubmit = () => {
        if (!name || !phone || !email || !password || !confirmPassword) {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }
        // Aquí puedes manejar el envío del formulario si todas las validaciones son correctas
        Alert.alert("Éxito", "Registro enviado con éxito.");
    };

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
                    placeholderTextColor="#4A6B3E"
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
                    placeholderTextColor="#4A6B3E"
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
                    placeholderTextColor="#4A6B3E"
                />
            </View>

            {/* Campo Contraseña con icono y botón para mostrar/ocultar */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-contraseña-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="contraseña"
                    value={password}
                    secureTextEntry={!showPassword}  // Usa el estado para determinar si se debe ocultar la contraseña
                    onChangeText={setPassword}
                    placeholderTextColor="#4A6B3E"
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                    <Image source={require('../Assets/icons8-visible-48.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Campo Confirmar Contraseña con icono y botón para mostrar/ocultar */}
            <View style={styles.inputContainer}>
                <Image source={require('../Assets/icons8-contraseña-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    secureTextEntry={!showConfirmPassword}  // Usa el estado para determinar si se debe ocultar la confirmación de contraseña
                    onChangeText={setConfirmPassword}
                    placeholderTextColor="#4A6B3E"
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
                    <Image source={require('../Assets/icons8-visible-48.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Botón de Iniciar */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>

            {/* Texto y botón para iniciar sesión */}
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Inicia sesión</Text>
                </TouchableOpacity>
            </View>

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
        height: "100%",
        paddingVertical: 0,
        fontSize: 16,
        paddingLeft: 10,
        color: "#4A6B3E",
    },
    eyeIcon: {
        marginLeft: 8,
    },
    button: {
        width: "85%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4A6B3E",
        borderRadius: 25,
        marginTop: 2,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    loginContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    loginText: {
        fontSize: 16,
        color: "#4A6B3E",
    },
    loginButton: {
        marginTop: 8,
    },
    loginButtonText: {
        color: "#4A6B3E",
        fontSize: 16,
        fontWeight: "bold",
    },
    bottomImage: {
        width: "109%",
        height: 240,
        marginTop: 0,
        resizeMode: "contain",
        position: "relative",
        bottom: 0, // Ubica la imagen en la parte inferior del contenedor
        left: 0,
    },
});
