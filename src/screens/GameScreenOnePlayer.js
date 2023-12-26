import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  BackHandler,
} from "react-native";
import { newGameBoardState } from "../js/GameBot";
import GamePlayPreview from "../components/GamePlayPreview";
import { GameStatsBar } from "../components/GameStatsBar";
import { addScore } from "../js/functions";
import GamePlayPreviewOnePlayer from "../components/GamePlayPreviewOnePlayer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GameScreen({
  handleScreen,
  gameLevel,
  MAX_GAME_PLAY = 10,
}) {
  const [gamePlaysCount, setGamePlaysCount] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameOver, setGameOver] = useState({
    result: false,
    message: "Game Over",
  });
  const [botPlaying, setBotPlaying] = useState(false);
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
  const checkWinType = (boardBoxNumber, _playerTurn) => {
    function delay2(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function botPlay() {
      setBotPlaying(true);
      await delay2(50);
      setBotPlaying(false);
      const botPlay = newGameBoardState(currentGameBoardState, gameLevel);
      setGameBoardState(botPlay.gameBoardState);
      checkWinType(botPlay.boxNumber, 2);
      setPlayerTurn(1);
    }
    //
    if (boardBoxNumber === -1) {
      botPlay();
    }
    //
    const currentGameBoardState = gameBoardState;
    currentGameBoardState[boardBoxNumber] = _playerTurn;
    //
    setPlayerTurn(_playerTurn === 1 ? 2 : 1);
    setGameBoardState(currentGameBoardState);
    set_GameBoardState(currentGameBoardState);
    //
    let result = null;
    //
    const gameOver =
      currentGameBoardState[1] !== 0 &&
      currentGameBoardState[2] !== 0 &&
      currentGameBoardState[3] !== 0 &&
      currentGameBoardState[4] !== 0 &&
      currentGameBoardState[5] !== 0 &&
      currentGameBoardState[6] !== 0 &&
      currentGameBoardState[7] !== 0 &&
      currentGameBoardState[8] !== 0 &&
      currentGameBoardState[9] !== 0;
    //
    if (gameOver) {
      result = true;
    }
    //
    const winSeq1 =
      currentGameBoardState[1] === _playerTurn &&
      currentGameBoardState[2] === _playerTurn &&
      currentGameBoardState[3] === _playerTurn;
    const winSeq2 =
      currentGameBoardState[1] === _playerTurn &&
      currentGameBoardState[5] === _playerTurn &&
      currentGameBoardState[9] === _playerTurn;
    const winSeq3 =
      currentGameBoardState[1] === _playerTurn &&
      currentGameBoardState[4] === _playerTurn &&
      currentGameBoardState[7] === _playerTurn;
    const winSeq4 =
      currentGameBoardState[2] === _playerTurn &&
      currentGameBoardState[5] === _playerTurn &&
      currentGameBoardState[8] === _playerTurn;
    const winSeq5 =
      currentGameBoardState[3] === _playerTurn &&
      currentGameBoardState[5] === _playerTurn &&
      currentGameBoardState[7] === _playerTurn;
    const winSeq6 =
      currentGameBoardState[3] === _playerTurn &&
      currentGameBoardState[6] === _playerTurn &&
      currentGameBoardState[9] === _playerTurn;
    const winSeq7 =
      currentGameBoardState[4] === _playerTurn &&
      currentGameBoardState[5] === _playerTurn &&
      currentGameBoardState[6] === _playerTurn;
    const winSeq8 =
      currentGameBoardState[7] === _playerTurn &&
      currentGameBoardState[8] === _playerTurn &&
      currentGameBoardState[9] === _playerTurn;
    //
    if (winSeq1) {
      result = _playerTurn;
    } else if (winSeq2) {
      result = _playerTurn;
    } else if (winSeq3) {
      result = _playerTurn;
    } else if (winSeq4) {
      result = _playerTurn;
    } else if (winSeq5) {
      result = _playerTurn;
    } else if (winSeq6) {
      result = _playerTurn;
    } else if (winSeq7) {
      result = _playerTurn;
    } else if (winSeq8) {
      result = _playerTurn;
    }
    //
    //
    if (result === true && typeof result === "boolean") {
      handleAddScore();
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
      handleAddScore();
      //
      setGameOver({
        result: true,
        message: "Player " + result + " Won!",
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
      switch (result) {
        case 1:
          setPlayerScore({
            ...playerScore,
            player1: playerScore.player1 + 1,
          });
          break;
        case 2:
          setPlayerScore({
            ...playerScore,
            player2: playerScore.player2 + 1,
          });
          break;
        default:
          break;
      }
      //
    } else if (result === null) {
      if (_playerTurn === 1) {
        botPlay();
      }
    }
    //
  };
  //
  const handleAddScore = () => {
    setGamePlaysCount(gamePlaysCount + 1);
    if (gamePlaysCount + 1 === MAX_GAME_PLAY + 1) {
      addScore(
        {
          user: playerScore.player1,
          bot: playerScore.player2,
          draw: MAX_GAME_PLAY - (playerScore.player1 + playerScore.player2),
          plays: MAX_GAME_PLAY,
        },
        gameLevel,
        {}
      );
    }
  };

  //
  const resetGame = (continueGame) => {
    setGameOver({
      result: false,
      message: "Game Over",
    });
    //
    if (playerTurn === 2) {
      checkWinType(-1, 2);
    }
    //
    if (continueGame === false) {
      setPlayerTurn(1);
      setGamePlaysCount(1);
      setPlayerScore({ player1: 0, player2: 0 });
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
        
          <GameStatsBar
            handleScreen={handleScreen}
            resetGame={resetGame}
            MAX_GAME_PLAY={MAX_GAME_PLAY}
            gamePlaysCount={gamePlaysCount}
          />

          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
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

          {/* GAME BOARD */}

          <View style={styles.gameButtonContainer}>
            <View style={styles.gameButtonSubContainer}>
              <TouchableOpacity
                style={styles.gameButtonDefault}
                onPress={() => {
                  if (gameBoardState[1] === 0 && botPlaying === false) {
                    checkWinType(1, playerTurn);
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
                  if (gameBoardState[2] === 0 && botPlaying === false) {
                    checkWinType(2, playerTurn);
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
                  if (gameBoardState[3] === 0 && botPlaying === false) {
                    checkWinType(3, playerTurn);
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
                  if (gameBoardState[4] === 0 && botPlaying === false) {
                    checkWinType(4, playerTurn);
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
                  if (gameBoardState[5] === 0 && botPlaying === false) {
                    checkWinType(5, playerTurn);
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
                  if (gameBoardState[6] === 0 && botPlaying === false) {
                    checkWinType(6, playerTurn);
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
                  if (gameBoardState[7] === 0 && botPlaying === false) {
                    checkWinType(7, playerTurn);
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
                  if (gameBoardState[8] === 0 && botPlaying === false) {
                    checkWinType(8, playerTurn);
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
                  if (gameBoardState[9] === 0 && botPlaying === false) {
                    checkWinType(9, playerTurn);
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
        <GamePlayPreviewOnePlayer
          playerScore={playerScore}
          resetGame={resetGame}
          setGameOver={setGameOver}
          message={gameOver.message}
          handleScreen={handleScreen}
          _gameBoardState={_gameBoardState}
          gamePlaysCount={gamePlaysCount}
          MAX_GAME_PLAY={MAX_GAME_PLAY}
        />
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
