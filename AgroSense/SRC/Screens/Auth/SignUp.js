import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Estados para el manejo de errores
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = () => {
        // Reinicia los errores antes de validar
        setNameError(!name);
        setPhoneError(!phone);
        setEmailError(!email);
        setPasswordError(!password);
        setConfirmPasswordError(!confirmPassword || password !== confirmPassword);

        // Verifica si hay errores en los campos
        if (!name || !phone || !email || !password || !confirmPassword || password !== confirmPassword) {
            return;
        }

        // Si todo es correcto, limpia los campos
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        console.log("Registro enviado con éxito.");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrarse</Text>

            {/* Campo Nombre */}
            <View style={[styles.inputContainer, nameError && styles.inputError]}>
                <Image source={require('../../Assets/icons8-usuario-de-género-neutro-48.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#4A6B3E"
                />
            </View>

            {/* Campo Teléfono */}
            <View style={[styles.inputContainer, phoneError && styles.inputError]}>
                <Image source={require('../../Assets/icons8-teléfono-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Número de teléfono"
                    value={phone}
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                    placeholderTextColor="#4A6B3E"
                />
            </View>

            {/* Campo Correo */}
            <View style={[styles.inputContainer, emailError && styles.inputError]}>
                <Image source={require('../../Assets/icons8-logo-de-google-48.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
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
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                    placeholderTextColor="#4A6B3E"
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                    <Image source={require('../../Assets/icons8-visible-48.png')} style={styles.eyeIconImage} />
                </TouchableOpacity>
            </View>

            {/* Campo Confirmar Contraseña */}
            <View style={[styles.inputContainer, confirmPasswordError && styles.inputError]}>
                <Image source={require('../../Assets/icons8-contraseña-50.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholderTextColor="#4A6B3E"
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
                    <Image source={require('../../Assets/icons8-visible-48.png')} style={styles.eyeIconImage} />
                </TouchableOpacity>
            </View>

            {/* Botón de Iniciar */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>

            {/* Enlace para Iniciar Sesión */}
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Inicia sesión</Text>
                </TouchableOpacity>
            </View>

            {/* Imagen inferior */}
            <Image source={require('../../Assets/Agro.png')} style={styles.bottomImage} />
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
    inputError: {
        borderColor: "red", // Cambia el color del borde a rojo cuando hay error
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
    eyeIcon: {
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    eyeIconImage: {
        width: 24,
        height: 24,
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
        width: "190%",
        height: 240,
        resizeMode: "contain",
        position: "relative",
        bottom: 0,
    },
});
