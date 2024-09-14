import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 

// Importamos las pantallas
import SignUp from './SRC/Screens/Auth/SignUp';
import Login from './SRC/Screens/Auth/Login';  // Agregar import de Login
import Home from './SRC/Screens/Producer/Home';

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "Sign Up",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#4A6B3E" },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login} // Agregamos la pantalla de Login
          options={{
            title: "Iniciar Sesión",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#4A6B3E" },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
