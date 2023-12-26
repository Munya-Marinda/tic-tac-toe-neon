import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
  Text,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SelectLevel({ handleGameLevel, handleScreen }) {
  //
  useEffect(() => {
    const backAction = () => {
      handleScreen("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  //
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/game-assets/logo.png")}
        style={{
          width: windowWidth * 0.5,
          height: windowWidth * 0.5 * (313 / 542),
        }}
      />

      <Text
        style={{
          fontSize: 30,
          marginTop: 50,
          marginBottom: 75,
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        SELECT A LEVEL
      </Text>

      <View style={styles.horizontal_container}>
        <TouchableOpacity
          onPress={() => {
            handleGameLevel(0);
            handleScreen("OnePlayer");
          }}
        >
          <Image
            source={require("../../assets/game-assets/button-easy-bot-level.png")}
            style={{
              width: windowWidth * 0.4,
              height: windowWidth * 0.4,
              marginHorizontal: 10,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleGameLevel(1);
            handleScreen("OnePlayer");
          }}
        >
          <Image
            source={require("../../assets/game-assets/button-hard-bot-level.png")}
            style={{
              width: windowWidth * 0.4,
              height: windowWidth * 0.4,
              marginHorizontal: 10,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleScreen("Home");
        }}
      >
        <Image
          source={require("../../assets/game-assets/button-menu.png")}
          style={{
            width: windowWidth * 0.2,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  horizontal_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: windowWidth * 1,
    justifyContent: "center",
  },
  horizontal_container_center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.8,
  },
});
