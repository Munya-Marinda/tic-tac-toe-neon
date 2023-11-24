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

export const newGameBoardState = (gameBoardState) => {
  let THE_NEXT_MOVE = -1;
  const playerOneBlocks = [];
  const possibleNextMoves = [];
  const emptyPossibleNextMoves = [];

  Object.keys(gameBoardState).forEach((key) => {
    if (gameBoardState[key] === 1) {
      playerOneBlocks.push(parseInt(key));
    } else if (gameBoardState[key] === 0) {
      emptyPossibleNextMoves.push(parseInt(key));
    }
  });

  Object.keys(gameBoardState).forEach((key) => {
    winningSequences.forEach((sequence, i_sequence) => {
      let winSeqCount = 0;
      let winSeqArray = [];
      let winNextMove = -1;
      playerOneBlocks.forEach((blockNumber) => {
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

        // console.log("sequence", sequence);
        // console.log("i_sequence", i_sequence);
        // console.log("winSeqCount", winSeqCount);
        // console.log("winSeqArray", winSeqArray);
        // console.log("winNextMove", winNextMove);
        // console.log(" ");
      }
    });
  });

  if (possibleNextMoves.length === 0) {
    THE_NEXT_MOVE =
      emptyPossibleNextMoves[getRandomIndex(emptyPossibleNextMoves)];
  } else {
    THE_NEXT_MOVE = possibleNextMoves[getRandomIndex(possibleNextMoves)];
  }

  //   console.log("possibleNextMoves", possibleNextMoves);
  //   console.log("emptyPossibleNextMoves", emptyPossibleNextMoves);
  //   console.log("THE_NEXT_MOVE", THE_NEXT_MOVE);
  gameBoardState[THE_NEXT_MOVE] = 2;
  //   console.log(" ");
  //   console.log(" ");

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
//
//
//
//
//
//
//
//
//
