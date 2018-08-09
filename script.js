const wordFollows = {}

for(let i=0; i<words.length-1; i++){
    const thisWord = words[i]
    const nextWord = words[i+1]
    if(!wordFollows.hasOwnProperty(thisWord)){
        wordFollows[thisWord] = []
    }
    wordFollows[thisWord].push(nextWord)
}

function generateText(start, n_words){
    let lastWord = start.toLowerCase()
    if(!wordFollows.hasOwnProperty(lastWord)){return "WORD ISNT THERE"}
    let text = lastWord
    for(let i=0; i<n_words; i++){
        const options = wordFollows[lastWord]
        const index = Math.floor(Math.random() * options.length)
        lastWord = options[index]
        text += ' ' + lastWord
    }
    return text
}

