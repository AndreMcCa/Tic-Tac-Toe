export default function checkForWin(allPlayers, playersPositionsArray) {
  const sets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const positionsAllPlayers = returnPositionsAllPlayers(allPlayers, playersPositionsArray);

  return positionsAllPlayers.some(player => {
    return sets.some(set => {
      return set.every(pos => player.includes(pos));
    });
  });
}

function returnPositionsAllPlayers(allPlayers, playersPositionsArray) {
  return allPlayers.map(player =>
    playersPositionsArray.reduce((acc, el, idx) => {
      if (el !== player) {
        return acc;
      }
      return [...acc, idx];
    }, []),
  );
}
