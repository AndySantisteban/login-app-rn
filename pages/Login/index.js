import React, { useCallback, useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SignIn } from "../../services/login";
import style from "./style";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Authentificated = useCallback(() => {
    SignIn({
      username: username,
      password: password,
    })
      .then((res) => {
        alert("Bienvenido");
        navigation.navigate("Home");
      })
      .catch((e) => {
        alert(e);
      });
  }, [username, password]);
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.title}>Iniciar Sesión</Text>
        <View style={style.container}>
          <Text>Correo electrónico</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={style.input}
            editable
          />
        </View>
        <View style={style.container}>
          <Text>Contraseña</Text>
          <TextInput
            value={password}
            style={style.input}
            onChangeText={setPassword}
            editable
            secureTextEntry
          />
        </View>

        <View style={style.container}>
          <Button
            onPress={() => {
              Authentificated();
            }}
            title="Iniciar sesión"
            color={"#10b981"}
          />
        </View>
        <View style={style.container}>
          <Pressable
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={style.link}>¿No tienes cuenta? Registrate</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
