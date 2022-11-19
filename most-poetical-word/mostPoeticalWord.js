/*
 * Complete the 'mostPoeticalWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING poem as parameter.
 */

// VOWELS: 'a', 'e', 'i', 'o', 'u', 'y'
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
function mostPoeticalWord(poem) {
  
  console.log('mostPoeticalWord');
  
    //split poem into array of words
    let splitPoemArr = poem.split(' ');
  
  console.log(splitPoemArr);
  
    //create a new array to hold scores
    let scores = [];
    //iterate through words
    for (let i = 0; i < splitPoemArr.length; i++) {
        //initialie a var to hold the score for each word
        let score = 0;
        let word = splitPoemArr[i];
        
        //iterate through each character of the word and 
        for (let j = 0; j < word.length; j++) {
            
            let c = word.charAt(j);
            
            if (vowels.includes(c)) {
                score++;
            } else if (c === 'k') {
                score--;
            } else if (c === 'x') {
                score -= 2;
            } 
        }
        
        //add/subtract to it's score according to the rules
        //add score to array to track scores
        scores.push(score);
    
    }
      
        
    //iterate through scores and determine position in new array of highest score
    let highestScore = 0;
    let highestScoreIndex = 0;
    for (let k = 0; k < scores.length; k++) {
        let currentScore = scores[k];
        
        console.log('currentScore = ' + currentScore);
        if (currentScore > highestScore) {
            highestScoreIndex = k;
            highestScore = currentScore;
        }
        
        
        console.log('highestScoreIndex = ' + highestScoreIndex);
        console.log('highestScore = ' + highestScore);
        console.log('--');
    }
    //return word at highest score index
    return splitPoemArr[highestScoreIndex];
}



mostPoeticalWord('Seeking that beauteous roof to ruinate');
