import { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  Modal,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function CountDownModal({
  showCountDoModal = false,
  handleSetShowCountDoModal,
  MAX_GAME_PLAY,
  gameOver_message,
}) {
  //
  const [count, setCount] = useState(3);
  //
  useEffect(() => {
    countDown();
  }, [showCountDoModal]);

  const countDown = () => {
    let int = 0;
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      int++;
      if (int >= 3) {
        handleSetShowCountDoModal(false);
        clearInterval(intervalId);
        setCount(3);
      }
    }, 600);
  };
  //
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showCountDoModal}
      onRequestClose={() => {
        handleSetShowCountDoModal(false);
      }}
    >
      <View style={styles.centeredView}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {gameOver_message}
        </Text>
        <Text
          style={{
            fontSize: 100,
            color: "yellow",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {count}
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  horizontal_container: {
    display: "flex",
    marginBottom: 60,
    flexDirection: "row",
    alignItems: "flex-start",
    width: windowWidth * 1,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    backgroundColor: "#230436ff",
    borderWidth: 1,
    borderColor: "white",
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
    alignItems: "center",
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
