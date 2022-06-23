import React, { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import style from "./style";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.title}>Iniciar Sesión</Text>
        <View style={style.container}>
          <Text>Correo electrónico</Text>
          <TextInput
            value={username}
            onChange={(e) => {
              setUsername(e);
            }}
            style={style.input}
            editable
          />
        </View>
        <View style={style.container}>
          <Text>Contraseña</Text>
          <TextInput
            value={password}
            style={style.input}
            onChange={(e) => {
              setPassword(e);
            }}
            editable
          />
        </View>

        <View style={style.container}>
          <Button
            onPress={() => {
              navigation.navigate("Home");
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

export default Register;
