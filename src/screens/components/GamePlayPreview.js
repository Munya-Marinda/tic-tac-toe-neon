import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GamePlayPreview({ _gameBoardState }) {
  //
  //
  //
  //
  return (
    <View style={styles.gameButtonContainer}>
      <View style={styles.gameButtonSubContainer}>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[1] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[1] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[2] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[2] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[3] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[3] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
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
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[4] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[5] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[5] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[6] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[6] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
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
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[7] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[8] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[8] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButtonDefault}>
          {_gameBoardState[9] === 0 ? (
            <Image
              source={require("../../../assets/game-assets/big-emtpy.png")}
              style={styles.gameButtomImage}
            />
          ) : (
            <Image
              source={
                _gameBoardState[9] === 1
                  ? require("../../../assets/game-assets/big-x.png")
                  : require("../../../assets/game-assets/big-o.png")
              }
              style={styles.gameButtomImage}
            />
          )}
        </TouchableOpacity>
      </View>
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
