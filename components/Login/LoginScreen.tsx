import { Header } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { onChange } from "react-native-reanimated";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  // const [handleBlur, setHandleBlur] = useState(false);

  function phoneValidator() {
    let rjx = /^[0-9]+$/;
    let isValid = rjx.test(phone);
    if (phone == "" && !isValid) {
      setPhoneError("number should not be empty");
    } else if (!isValid) {
      setPhoneError("enter number only");
    } else if (phone.length != 10) {
      setPhoneError("number must be 10 digit");
    } else {
      setPhoneError("");
    }
  }

  function phoneInput(enteredText: React.SetStateAction<string>) {
    setPhone(enteredText);
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={[styles.submitText]}>Add new Address</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("demo")}>
          <Text style={[styles.submitText]}>demo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.white}>
        <TextInput
          placeholder="eg : 9876543210"
          keyboardType={"numeric"}
          maxLength={10}
          style={[
            styles.input,
            {
              borderColor: isFocused ? "#939597" : "red",
            },
          ]}
          onBlur={() => [phoneValidator(), setIsFocused(false)]}
          onFocus={() => {
            setIsFocused(true);
          }}
          onChangeText={() => phoneInput}
          value={phone}
        />
        <Text style={styles.textError}>{[phoneError]}</Text>
      </View>
      <View style={styles.submit}>
        <TouchableOpacity onPress={() => navigation.navigate("pin")}>
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#fbf2d4",
  },
  input: {
    height: 50,
    borderWidth: 3,
    borderRadius: 15,
    width: 300,
    marginTop: 50,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    fontSize: 16,
  },
  submit: {
    width: "85%",
    padding: 10,
    alignSelf: "center",
  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#2e8b57",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  textError: {
    color: "red",
    marginLeft: 25,
    fontSize: 15,
  },
  white: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 20,
    marginTop: "30%",
    alignSelf: "center",
    height: "60%",
  },
});

export default LoginScreen;
