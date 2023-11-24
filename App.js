import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import GameScreenOnePlayer from "./src/screens/GameScreenOnePlayer.js";
import GameScreenTwoPlayer from "./src/screens/GameScreenTwoPlayer.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [gameType, setGameType] = useState(null);

  const changeGameType = (gameType) => {
    setGameType(gameType);
  };
  //
  //
  //
  //
  //

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/game-assets/bg-1.png")}
        resizeMode="cover"
        style={styles.cover_image}
      >
        {gameType !== null &&
          gameType !== undefined &&
          typeof gameType === "number" &&
          gameType === 1 && (
            <GameScreenOnePlayer
              gameType={gameType}
              changeGameType={changeGameType}
            />
          )}
        {gameType !== null &&
          gameType !== undefined &&
          typeof gameType === "number" &&
          gameType === 2 && (
            <GameScreenTwoPlayer
              gameType={gameType}
              changeGameType={changeGameType}
            />
          )}
        {(gameType === null ||
          gameType === undefined ||
          typeof gameType !== "number") && (
          <HomeScreen changeGameType={changeGameType} />
        )}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  },
  cover_image: {
    flex: 1,
    justifyContent: "center",
    width: windowWidth,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
  },
});
