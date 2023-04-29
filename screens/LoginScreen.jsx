import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  const keyboardHideByTouch = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHideByTouch}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.platform}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? -168 : 0,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Войти</Text>
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholderTextColor="#BDBDBD"
                  placeholder="Адрес электронной почты"
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16, position: "relative" }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholderTextColor="#BDBDBD"
                  placeholder="Пароль"
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btnShowPassword}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.titleShowPassword}>
                    {showPassword ? "Показать" : "Скрыть"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  platform: {
    flex: 1,
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    marginHorizontal: 16,
    fontSize: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  form: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  btnShowPassword: {
    position: "absolute",
    right: 32,
    top: 14,
  },
  titleShowPassword: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
  },
  btnShowPassword: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  titleShowPassword: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
  },
  btn: {
    borderRadius: 180,

    height: 51,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    color: "#ffffff",
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 32,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
  },
  footer: {
    alignItems: "center",
    marginBottom: 144,
    marginTop: 16,
  },
  footerTitle: {
    fontSize: 16,
    color: "#1B4371",
  },
});
