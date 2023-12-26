import { useEffect, useState } from "react";
import GamePlayPreview from "../components/GamePlayPreview";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  Alert,
} from "react-native";
import { GameStatsBar } from "../components/GameStatsBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GameScreen({ handleScreen }) {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameOver, setGameOver] = useState({
    result: false,
    message: "Game Over",
  });
  const [playerScore, setPlayerScore] = useState({ player1: 0, player2: 0 });
  const [_gameBoardState, set_GameBoardState] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });
  const [gameBoardState, setGameBoardState] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });
  //
  //
  //
  //
  useEffect(() => {
    const result = checkWinType();
    //
    if (result === true && typeof result === "boolean") {
      setGameOver({
        result: true,
        message: "Game Draw.",
      });
      //
      setGameBoardState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      });
      //
    } else if (result === 1 || result === 2) {
      setGameOver({
        result: true,
        message: "Player " + result + " Won!",
      });
      //
      setPlayerTurn(result);
      //
      switch (result) {
        case 1:
          setPlayerScore({ ...playerScore, player1: playerScore.player1 + 1 });
          break;
        case 2:
          setPlayerScore({ ...playerScore, player2: playerScore.player2 + 1 });
          break;
        default:
          break;
      }
      //
      setGameBoardState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      });
    }
    //
    const bool =
      gameBoardState[1] !== 0 ||
      gameBoardState[2] !== 0 ||
      gameBoardState[3] !== 0 ||
      gameBoardState[4] !== 0 ||
      gameBoardState[5] !== 0 ||
      gameBoardState[6] !== 0 ||
      gameBoardState[7] !== 0 ||
      gameBoardState[8] !== 0 ||
      gameBoardState[9] !== 0;
    if (bool) {
      set_GameBoardState(gameBoardState);
    }
  }, [gameBoardState]);
  //
  useEffect(() => {
    const backAction = () => {
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
  const checkWinType = () => {
    const gameOver =
      gameBoardState[1] !== 0 &&
      gameBoardState[2] !== 0 &&
      gameBoardState[3] !== 0 &&
      gameBoardState[4] !== 0 &&
      gameBoardState[5] !== 0 &&
      gameBoardState[6] !== 0 &&
      gameBoardState[7] !== 0 &&
      gameBoardState[8] !== 0 &&
      gameBoardState[9] !== 0;
    //
    if (gameOver) {
      return true;
    }
    //
    const prevPlayer = playerTurn === 1 ? 2 : 1;
    //
    const winSeq1 =
      gameBoardState[1] === prevPlayer &&
      gameBoardState[2] === prevPlayer &&
      gameBoardState[3] === prevPlayer;
    const winSeq2 =
      gameBoardState[1] === prevPlayer &&
      gameBoardState[5] === prevPlayer &&
      gameBoardState[9] === prevPlayer;
    const winSeq3 =
      gameBoardState[1] === prevPlayer &&
      gameBoardState[4] === prevPlayer &&
      gameBoardState[7] === prevPlayer;
    const winSeq4 =
      gameBoardState[2] === prevPlayer &&
      gameBoardState[5] === prevPlayer &&
      gameBoardState[8] === prevPlayer;
    const winSeq5 =
      gameBoardState[3] === prevPlayer &&
      gameBoardState[5] === prevPlayer &&
      gameBoardState[7] === prevPlayer;
    const winSeq6 =
      gameBoardState[3] === prevPlayer &&
      gameBoardState[6] === prevPlayer &&
      gameBoardState[9] === prevPlayer;
    const winSeq7 =
      gameBoardState[4] === prevPlayer &&
      gameBoardState[5] === prevPlayer &&
      gameBoardState[6] === prevPlayer;
    const winSeq8 =
      gameBoardState[7] === prevPlayer &&
      gameBoardState[8] === prevPlayer &&
      gameBoardState[9] === prevPlayer;
    //
    if (winSeq1) {
      return prevPlayer;
    }
    if (winSeq2) {
      return prevPlayer;
    }
    if (winSeq3) {
      return prevPlayer;
    }
    if (winSeq4) {
      return prevPlayer;
    }
    if (winSeq5) {
      return prevPlayer;
    }
    if (winSeq6) {
      return prevPlayer;
    }
    if (winSeq7) {
      return prevPlayer;
    }
    if (winSeq8) {
      return prevPlayer;
    }
    //
    return false;
    //
  };
  //
  //
  const resetGame = (continueGame) => {
    setGameOver({
      result: false,
      message: "Game Over",
    });
    //
    if (continueGame === false) {
      setPlayerTurn(1);
      setPlayerScore({ player1: 0, player2: 0 });
      setGameBoardState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      });
    }
  };
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <View style={styles.container}>
      {!gameOver.result ? (
        <>
          <GameStatsBar handleScreen={handleScreen} resetGame={resetGame} />
          <Text
            style={{
              fontSize: 20,
              marginTop: 30,
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {"Player " + playerTurn + "'s turn"}
          </Text>

          <View style={styles.gameScoreContainer}>
            {/* PLAYER 1 Scoreboard */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                opacity: playerTurn === 1 ? 1 : 0.4,
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
                  width: windowWidth * 0.2,
                  height: windowWidth * 0.2,
                  resizeMode: "contain",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  {playerScore.player1}
                </Text>
              </ImageBackground>
            </View>
            {/* PLAYER 2 Scoreboard */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                opacity: playerTurn === 2 ? 1 : 0.4,
              }}
            >
              <ImageBackground
                resizeMode="cover"
                source={require("../../assets/game-assets/square-2.png")}
                style={{
                  width: windowWidth * 0.2,
                  height: windowWidth * 0.2,
                  resizeMode: "contain",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 30, fontWeight: "bold" }}
                >
                  {playerScore.player2}
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

          <View style={styles.gameButtonContainer}>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[1] === 0) {
                    setGameBoardState({ ...gameBoardState, 1: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[1] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[1] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[2] === 0) {
                    setGameBoardState({ ...gameBoardState, 2: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[2] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[2] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[3] === 0) {
                    setGameBoardState({ ...gameBoardState, 3: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[3] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[3] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[4] === 0) {
                    setGameBoardState({ ...gameBoardState, 4: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[4] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[4] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[5] === 0) {
                    setGameBoardState({ ...gameBoardState, 5: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[5] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[5] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[6] === 0) {
                    setGameBoardState({ ...gameBoardState, 6: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[6] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[6] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[7] === 0) {
                    setGameBoardState({ ...gameBoardState, 7: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[7] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[7] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[8] === 0) {
                    setGameBoardState({ ...gameBoardState, 8: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[8] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[8] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[9] === 0) {
                    setGameBoardState({ ...gameBoardState, 9: playerTurn });
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                  }
                }}
              >
                {gameBoardState[9] === 0 ? (
                  <Image
                    source={require("../../assets/game-assets/big-emtpy.png")}
                    style={styles.gameButtomImage}
                  />
                ) : (
                  <Image
                    source={
                      gameBoardState[9] === 1
                        ? require("../../assets/game-assets/big-x.png")
                        : require("../../assets/game-assets/big-o.png")
                    }
                    style={styles.gameButtomImage}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <GamePlayPreview
            resetGame={resetGame}
            setGameOver={setGameOver}
            message={gameOver.message}
            handleScreen={handleScreen}
            _gameBoardState={_gameBoardState}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  gameButtonContainer: {
    marginTop: 60,
    width: windowWidth / 1.2,
    height: windowWidth / 1.2,
  },
  gameButtonSubContainer: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth / 1.2,
  },
  gameButtonDefault: {
    marginRight: 4,
    marginBottom: 4,
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    borderColor: "silver",
    justifyContent: "center",
    width: windowWidth / 1.2 / 3,
    height: windowWidth / 1.2 / 3,
  },
  gameButtomImage: {
    width: windowWidth / 1.2 / 3.8,
    height: windowWidth / 1.2 / 3.8,
  },
  gameScoreContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    width: windowWidth * 0.8,
    justifyContent: "space-between",
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
