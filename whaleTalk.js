let input = 'a whale of a deal!';
let vowels = ['a','e','i','o','u'];
//declaring an empty array to store the characters
let resultArray = [];
//The nested for loop is to iterate through the input array and the vowels array and check for similarity.
for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    //console.log('j is ' + j);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
      if (input[i] === 'e'){
        resultArray.push(input[i]);
      }
      if (input[i] === 'u'){
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());