import { play } from "./index.js"

const game = choice => {
  const winner = play(choice)

  output.innerHTML = winner
  output.style.background = /WIN/.test(winner)
    ? "#b2f2bb"
    : /LOSE/.test(winner)
    ? "#ffc9c9"
    : "#a5d8ff"
}

document
  .querySelectorAll("button")
  .forEach(button =>
    button.addEventListener("click", e => game(e.target.value))
  )
