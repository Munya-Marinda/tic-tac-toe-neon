const winningSequences = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
];

export const newGameBoardState = (gameBoardState, level = 0) => {
  let THE_NEXT_MOVE = -1;
  const playerOneBlocks = [];
  const botBlocks = [];
  let possibleNextMoves = [];
  let possibleBotWinningNextMoves = [];
  const emptyPossibleNextMoves = [];

  Object.keys(gameBoardState).forEach((key) => {
    if (gameBoardState[key] === 1) {
      playerOneBlocks.push(parseInt(key));
    } else if (gameBoardState[key] === 2) {
      botBlocks.push(parseInt(key));
    } else if (gameBoardState[key] === 0) {
      emptyPossibleNextMoves.push(parseInt(key));
    }
  });

  possibleNextMoves = calculateWinningMove(gameBoardState, playerOneBlocks);
  possibleBotWinningNextMoves = calculateWinningMove(gameBoardState, botBlocks);

  if (possibleBotWinningNextMoves.length > 0 && level === 1) {
    THE_NEXT_MOVE =
      possibleBotWinningNextMoves[getRandomIndex(possibleBotWinningNextMoves)];
  } else if (possibleNextMoves.length === 0) {
    THE_NEXT_MOVE =
      emptyPossibleNextMoves[getRandomIndex(emptyPossibleNextMoves)];
  } else {
    THE_NEXT_MOVE = possibleNextMoves[getRandomIndex(possibleNextMoves)];
  }

  gameBoardState[THE_NEXT_MOVE] = 2;

  return { gameBoardState: gameBoardState, boxNumber: THE_NEXT_MOVE };
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
function getRandomIndex(array) {
  if (Array.isArray(array) && array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }
  return 0;
}

const calculateWinningMove = (gameBoardState, playerBlocks) => {
  const possibleNextMoves = [];
  Object.keys(gameBoardState).forEach(() => {
    winningSequences.forEach((sequence) => {
      let winSeqCount = 0;
      let winSeqArray = [];
      let winNextMove = -1;
      playerBlocks.forEach((blockNumber) => {
        if (sequence.indexOf(blockNumber) !== -1) {
          winSeqCount++;
          winSeqArray.push(blockNumber);
        }
      });
      if (winSeqCount === 2) {
        sequence.forEach((sequenceNumber) => {
          if (
            winSeqArray.indexOf(sequenceNumber) === -1 &&
            gameBoardState[sequenceNumber] === 0
          ) {
            winNextMove = sequenceNumber;
            possibleNextMoves.push(sequenceNumber);
          }
        });
      }
    });
  });
  return possibleNextMoves;
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
