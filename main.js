var input = 'turpentine and turtles';
var input = input.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u']

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(input[i], i);
    const inputIterate = input[i];
    if (input[i] == 'e') {
        resultArray.push(input[i])
    };
    if (input[i] == 'u') {
        resultArray.push(input[i]) 
    };
        
    for (let j = 0; j < vowels.length; j++) {
        // console.log(vowels[j]);
        const vowelsIterate = vowels[j];
        if(inputIterate === vowelsIterate){
            resultArray.push(vowelsIterate);
        }
    } 
    
}
var resultString = resultArray.join('').toUpperCase(); 

console.log(resultString)
