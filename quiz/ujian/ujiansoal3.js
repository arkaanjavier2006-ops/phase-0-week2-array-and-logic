/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let firstLetterArr = [];
    let finalArr=[]
    let firstLetter;
    for(let i = 0; i < animals.length; i++){
        firstLetter = animals[i][0];
        if(!(firstLetterArr.includes(firstLetter))){
            firstLetterArr.push(animals[i][0]);  
            finalArr.push([]);
        }
        for(let j = 0; j < firstLetterArr.length; j++){
            if(firstLetter == firstLetterArr[j]){
                finalArr[j].push(animals[i]);
            }
        }
    }
    return finalArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]