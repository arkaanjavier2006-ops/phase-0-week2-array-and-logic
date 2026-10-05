/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
/*function targetTerdekat(arr) {
    // you can only write your code here!
    console.log('========begin=========')
    let i = 0;
    let positionX;
    let positionO;
    while(((positionX == null) || (positionO == null)) && (i < arr.length)){
        if(arr[i] == 'x'){
            positionX = i;
        }
        else if(arr[i] == 'o'){
            positionO = i;
        }
        i++;
        console.log(`position o : ${positionO}`);
        console.log(`position x : ${positionX}`);
        console.log(`position i : ${i}`);
    }
    if((i == arr.length) && ((positionO == null) || (positionX == null))){
        return 0;
    }
    else{
        return Math.abs(positionO - positionX);
    }

}*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let i = 0;
    let positionX;
    let positionO;
    let distanceList = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] == 'x'){
            positionX = i;
        }
        else if(arr[i] == 'o'){
            positionO = i;
        }

        if ((positionO != null) && (positionX != null)){
            distanceList.push(Math.abs(positionO - positionX));
            positionO = null;
            positionX = null;
        }
    }

    if(!distanceList.length){
        return 0;
    }
    else if (distanceList.length == 1){
        return distanceList[0]
    }
    else{
        let minimalDistance = distanceList[0];
        for(let j = 0; j < distanceList.length; j++){
            if (distanceList[j] < minimalDistance){
                minimalDistance = distanceList[j]
            }
        }
        return minimalDistance;
    }
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1