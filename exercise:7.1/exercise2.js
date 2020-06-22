const longestWord = (text) => {
  let split = text.split(' ')
  let maxLength = 0;
  let output = '';

  for (const word of split){
        if (word.length > maxLength){
            maxLength = word.length
            output = word
        }
  }
  return output
}
