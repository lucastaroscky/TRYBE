const fatorial = (num) => {
  let input = 1
  for (let i = 1; i <= num; i += 1) {
    input *= i
  }
  console.log(`${num}! = ${(input)}`)
}

fatorial(4)
