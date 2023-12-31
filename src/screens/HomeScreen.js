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
} from "react-native";
import { HomeScreenModals } from "../components/HomeScreenModals";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ handleScreen }) {
  //
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit Game", "Do you want to exit the game?", [
        {
          text: "Cancel",
          onPress: () => {
            return false;
          },
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
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
          width: windowWidth * 0.8,
          height: windowWidth * 0.8 * (313 / 542),
          marginTop: windowWidth * 0.3,
        }}
      />
      <View style={styles.horizontal_container}>
        <TouchableOpacity
          onPress={() => {
            handleScreen("SelectLevel");
          }}
        >
          <Image
            source={require("../../assets/game-assets/button-1-player.png")}
            style={{
              width: windowWidth * 0.25,
              marginHorizontal: 30,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleScreen("TwoPlayer");
          }}
        >
          <Image
            source={require("../../assets/game-assets/button-2-player.png")}
            style={{
              width: windowWidth * 0.25,
              marginHorizontal: 30,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
      <HomeScreenModals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "space-between",
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
