import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground, 
} from "react-native";
import GameScreenOnePlayer from "./screens/GameScreenOnePlayer.js";
import GameScreenTwoPlayer from "./screens/GameScreenTwoPlayer.js";
import HomeScreen from "./screens/HomeScreen.js";
import { useState } from "react";
import { ThemedStatusBar } from "./components/ThemedStatusBar.jsx";
import SelectLevel from "./screens/SelectLevel.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [gameLevel, setGameLevel] = useState(1);
  const [maxGamePlay, setMaxGamePlay] = useState(2);
  //
  const handleScreen = (screen) => {
    setCurrentScreen(screen);
  };
  //
  const handleGameLevel = (level) => {
    setGameLevel(level);
  };
  //
  return (
    <>
      <ThemedStatusBar />
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/game-assets/bg-1.png")}
          resizeMode="cover"
          style={styles.cover_image}
        >
          {currentScreen === "OnePlayer" && (
            <GameScreenOnePlayer
              gameLevel={gameLevel}
              handleScreen={handleScreen}
              MAX_GAME_PLAY={maxGamePlay}
            />
          )}
          {currentScreen === "TwoPlayer" && (
            <GameScreenTwoPlayer handleScreen={handleScreen} />
          )}
          {currentScreen === "Home" && (
            <HomeScreen
              handleScreen={handleScreen}
              handleGameLevel={handleGameLevel}
            />
          )}
          {currentScreen === "SelectLevel" && (
            <SelectLevel
              handleScreen={handleScreen}
              handleGameLevel={handleGameLevel}
            />
          )}
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: "black",
  },
  cover_image: {
    flex: 1,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    justifyContent: "center",
  },
});
