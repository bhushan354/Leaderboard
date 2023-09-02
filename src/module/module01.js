const newGame = async () => {
  const newRequest = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games');
  await fetch(newRequest, {
    method: 'POST',
    body: JSON.stringify({
      name: 'ludo',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const addPlayer = async (name, score) => {
  const newRequest = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bCGtghjEZ8GNT6S5ERzw/scores/');
  await fetch(newRequest, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export {
  newGame,
  addPlayer,
};
