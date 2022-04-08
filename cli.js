#!/usr/bin/env node

import { play } from "./index.js"

try {
  const value = play(process.argv[2])
  const reset = "\x1b[0m"
  const color = /WIN/.test(value)
    ? "\x1b[32m"
    : /LOSE/.test(value)
    ? "\x1b[31m"
    : "\x1b[34m"
  console.log(`${color}${value}${reset}`)
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
