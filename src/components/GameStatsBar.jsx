import { useState } from "react";
import {
  Pressable,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { ThemedIonicons } from "../components/ThemedIonicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function GameStatsBar({
  resetGame,
  handleScreen,
  MAX_GAME_PLAY = null,
  gamePlaysCount = null,
}) {
  const [gamePlayMenuModalVisible, setGamePlayMenuModalVisible] =
    useState(false);
  //
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={gamePlayMenuModalVisible}
        onRequestClose={() => {
          setGamePlayMenuModalVisible(!gamePlayMenuModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
                width: windowWidth * 0.9,
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() =>
                  setGamePlayMenuModalVisible(!gamePlayMenuModalVisible)
                }
              >
                {({ pressed }) => (
                  <Image
                    source={require("../../assets/game-assets/button-x-close-1.png")}
                    style={{
                      opacity: pressed ? 0.5 : 1,
                      width: 35,
                      height: 35,
                    }}
                  />
                )}
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                Alert.alert("Restart Game?", "Do you want restart the game?", [
                  {
                    text: "No",
                    onPress: () => {
                      return false;
                    },
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => {
                      resetGame(false);
                      setGamePlayMenuModalVisible(false);
                    },
                  },
                ]);
              }}
            >
              <Image
                source={require("../../assets/game-assets/button-restart-game-1.png")}
                style={styles.menu_button_image}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                Alert.alert("Forfeit Game?", "Do you want forfeit the game?", [
                  {
                    text: "No",
                    onPress: () => {
                      return false;
                    },
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => {
                      handleScreen("Home");
                      setGamePlayMenuModalVisible(false);
                    },
                  },
                ]);
              }}
            >
              <Image
                source={require("../../assets/game-assets/button-main-menu-1.png")}
                style={styles.menu_button_image}
              />
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.horizontal_container}>
        {MAX_GAME_PLAY !== null && gamePlaysCount !== null ? (
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            {"GAME " + gamePlaysCount + " of " + MAX_GAME_PLAY}
          </Text>
        ) : (
          <Text></Text>
        )}

        <Pressable
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
          onPress={() => setGamePlayMenuModalVisible(true)}
        >
          {({ pressed }) => (
            <Image
              source={require("../../assets/game-assets/button-pause-game-1.png")}
              style={{
                opacity: pressed ? 0.5 : 1,
                width: 35,
                height: 35,
              }}
            />
          )}
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#230436ff",
    borderWidth: 1,
    borderColor: "white",
    width: windowWidth * 0.9,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openMenuButton: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "gray",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  openMenuButtonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  menu_button_image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8 * (47 / 327),
    marginBottom: 20,
  },
  horizontal_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth * 1,
    justifyContent: "space-between",
  },
});
