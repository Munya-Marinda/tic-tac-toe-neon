import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ changeGameType }) {
  const [showGameType, setShowGameType] = useState(false);

  const handleGameType = (type) => {
    changeGameType(type);
  };

  //
  //
  //
  //
  //
  //
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/game-assets/logo.png")}
        style={{
          width: windowWidth * 0.8,
          resizeMode: "contain",
        }}
      />
      {showGameType ? (
        <View style={styles.horizontal_container}>
          <TouchableOpacity
            onPress={() => {
              handleGameType(1);
            }}
          >
            <Image
              source={require("../../assets/game-assets/button-1-player.png")}
              style={{
                width: windowWidth * 0.25,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleGameType(2);
            }}
          >
            <Image
              source={require("../../assets/game-assets/button-2-player.png")}
              style={{
                width: windowWidth * 0.25,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.horizontal_container_center}>
          <TouchableOpacity
            onPress={() => {
              setShowGameType(true);
            }}
          >
            <Image
              source={require("../../assets/game-assets/button-select-game-type.png")}
              style={{
                width: windowWidth * 0.6,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  horizontal_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: windowWidth * 0.65,
    justifyContent: "space-between",
  },
  horizontal_container_center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.8,
  },
});
