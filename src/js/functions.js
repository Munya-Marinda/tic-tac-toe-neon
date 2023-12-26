import AsyncStorage from "@react-native-async-storage/async-storage";

export const addScore = async (
  score = { user: 0, bot: 0, draw: 0 },
  level = 0,
  opt = {}
) => {
  // console.log("ADD SCORE: ", score);
  //
  if (score === undefined || score === null || typeof score !== "object") {
    return;
  }
  //
  const levelKey = level === 0 ? "easy" : "hard";
  //
  try {
    const jsonValue = await AsyncStorage.getItem(levelKey);
    all_scores = jsonValue != null ? JSON.parse(jsonValue) : [];
    score["date"] = new Date();
    //
    try {
      all_scores.push(score);
      const jsonString = JSON.stringify(all_scores);
      await AsyncStorage.setItem(levelKey, jsonString);
      return;
    } catch (e) {
      console.log(e);
    }
  } catch (e) {}
};

export const getScores = async () => {
  const scores = {};
  try {
    const jsonEasy = await AsyncStorage.getItem("easy");
    scores["easy"] = jsonEasy != null ? JSON.parse(jsonEasy) : [];
    try {
      const jsonHard = await AsyncStorage.getItem("hard");
      scores["hard"] = jsonHard != null ? JSON.parse(jsonHard) : [];

      return scores;
    } catch (e) {
      return [];
    }
  } catch (e) {
    return [];
  }
};

export const clearScores = async () => {
  try {
    await AsyncStorage.removeItem("easy");
  } catch (e) {
    return [];
  }
  //
  try {
    await AsyncStorage.removeItem("hard");
  } catch (e) {
    return [];
  }
};

export function formatDate(inputDate) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const date = new Date(inputDate);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
