const hand = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"]

const comp = [
  [0, -1, "breaks", "crushes", -1],
  ["covers", 0, -1, -1, "disproves"],
  [-1, "cut", 0, "decapitate", -1],
  [-1, "eats", -1, 0, "poisons"],
  ["vaporizes", -1, "melts", -1, 0]
]

const validate = choice => {
  const c = choice && choice.toUpperCase()

  if (!hand.includes(c))
    throw new Error(`Your choice must be one of: ${hand.join(", ")}`)

  return c
}

export const play = choice => {
  const player = hand.indexOf(validate(choice))
  const opponent = ~~(Math.random() * hand.length)
  const winner = comp[player][opponent]

  return winner === 0
    ? `You both chose ${hand[player]}. You TIED!`
    : winner === -1
    ? `${hand[opponent]} ${comp[opponent][player]} ${hand[player]}. You LOSE!`
    : `${hand[player]} ${winner} ${hand[opponent]}. You WIN!`
}
