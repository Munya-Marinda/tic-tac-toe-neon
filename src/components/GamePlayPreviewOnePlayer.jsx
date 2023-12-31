import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  Alert,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GamePlayPreviewOnePlayer({
  message,
  resetGame,
  playerScore,
  setGameOver,
  handleScreen,
  _gameBoardState,
  gamePlaysCount = 0,
  MAX_GAME_PLAY = 10,
}) {
  //
  const [whoWon, setWhoWon] = useState(0);
  //
  useEffect(() => {
    if (playerScore?.player1 > playerScore?.player2) {
      setWhoWon(1);
    } else if (playerScore?.player1 < playerScore?.player2) {
      setWhoWon(2);
    } else {
      setWhoWon(0);
    }
  }, [playerScore]);
  //
  useEffect(() => {
    console.log("message", message);
    console.log("resetGame", resetGame);
    console.log("playerScore", playerScore);
    console.log("setGameOver", setGameOver);
    console.log("handleScreen", handleScreen);
    console.log("_gameBoardState", _gameBoardState);
    console.log("gamePlaysCount", gamePlaysCount);
    console.log("MAX_GAME_PLAY", MAX_GAME_PLAY);
    console.log(
      "----------------------------------------------------------------"
    );
  }, []);

  //
  //
  //
  //
  return (
    <View style={styles.container}>
      {/* END OF GAME ROUND */}
      {gamePlaysCount < MAX_GAME_PLAY + 1 ? (
        <>
          <Text
            style={{
              fontSize: 20,
              marginTop: 30,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {message}
          </Text>
          <View style={styles.gameButtonContainer}>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[1] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[1] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[2] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[2] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[3] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[3] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[4] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[4] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[5] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[5] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[6] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[6] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[7] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[7] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[8] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[8] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButtonDefault}>
                {_gameBoardState[9] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      _gameBoardState[9] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontal_container_center}>
            <TouchableOpacity
              onPress={() => {
                setGameOver({
                  result: false,
                  message: "New Game",
                });
                resetGame(true);
              }}
            >
              <Image
                source={require("../../assets/game-assets/button-play-next.png")}
                style={{
                  width: windowWidth * 0.2,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {/* END OF GAME FINAL */}

          {/* PLAYER 1 WON */}
          {whoWon === 1 && (
            <Image
              source={require("../../assets/game-assets/winner-player-1.png")}
              style={{
                width: windowWidth * 0.9,
                height: windowWidth * 0.9 * (203.267 / 164.52),
              }}
            />
          )}

          {/* PLAYER 2 WON */}
          {whoWon === 2 && (
            <Image
              source={require("../../assets/game-assets/winner-bot-1.png")}
              style={{
                width: windowWidth * 0.9,
                height: windowWidth * 0.9 * (203.267 / 164.52),
              }}
            />
          )}

          {/* NO PLAYER WON */}
          {whoWon === 0 && (
            <Image
              source={require("../../assets/game-assets/winner-draw-1.png")}
              style={{
                width: windowWidth * 0.9,
                height: windowWidth * 0.9 * (203.267 / 164.52),
              }}
            />
          )}

          {/* <Image
            source={require("../../assets/game-assets/winner-bot-2.png")}
            style={{
              width: windowWidth * 0.9,
              height: windowWidth * 0.9 * (112.731 / 164.519),
            }}
          /> */}

          <View style={styles.gameScoreContainer}>
            {/* PLAYER 1 Scoreboard */}
            <View
              style={{
                opacity: 1,
                display: "flex",
                flexDirection: "row",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/game-assets/small-x.png")}
                style={{
                  width: windowWidth * 0.08,
                  marginRight: 10,
                  resizeMode: "contain",
                }}
              />
              <ImageBackground
                resizeMode="cover"
                source={require("../../assets/game-assets/square-1.png")}
                style={{
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  {playerScore?.player1}
                </Text>
              </ImageBackground>
            </View>
            {/* PLAYER 2 Scoreboard */}
            <View
              style={{
                opacity: 1,
                display: "flex",
                flexDirection: "row",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageBackground
                resizeMode="cover"
                source={require("../../assets/game-assets/square-2.png")}
                style={{
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 30, fontWeight: "bold" }}
                >
                  {playerScore?.player2}
                </Text>
              </ImageBackground>
              <Image
                source={require("../../assets/game-assets/small-o.png")}
                style={{
                  width: windowWidth * 0.08,
                  marginLeft: 10,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>

          <View style={styles.horizontal_container}>
            <TouchableOpacity
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
                      resetGame(true);
                      handleScreen("Home");
                    },
                  },
                ]);
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
            <TouchableOpacity
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
                    },
                  },
                ]);
              }}
            >
              <Image
                source={require("../../assets/game-assets/button-restart.png")}
                style={{
                  width: windowWidth * 0.2,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "space-around",
  },
  gameButtonContainer: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    backgroundColor: "purple",
    // borderWidth: 3,
    // borderColor: "silver",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gameButtonSubContainer: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth / 1.5,
  },
  gameButtonDefault: {
    marginRight: 4,
    marginBottom: 4,
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    borderColor: "silver",
    backgroundColor: "black",
    justifyContent: "center",
    width: windowWidth / 4.8,
    height: windowWidth / 4.8,
  },
  gameButtomImage: {
    width: windowWidth / 8,
    height: windowWidth / 8,
  },
  gameScoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth * 0.8,
    justifyContent: "center",
  },
  horizontal_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: windowWidth * 0.6,
    justifyContent: "space-between",
  },
  horizontal_container_center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth * 0.6,
    justifyContent: "center",
  },
});
