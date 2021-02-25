


let randomNumbers = [1, 3, 5, 12, 16, 24, 25, 27, 33, 37,
                    42, 45, 50, 53, 56, 64, 65, 77, 80, 83,
                    86, 89, 99, 112];

function linearSearch(array, targetValue){
    for(i=0;i<array.length;i++){
        if(array[i] === targetValue){
            console.log(array[i]);
            return array[i];
        }
    }
    console.log('cant find it');
    return false;
}

// linearSearch(randomNumbers, 99)
// linearSearch(randomNumbers, 22)




function binarySearch(array, targetValue){
    var min = 0;
    var max = array.length - 1;
    var numOfGuesses = 1
    var guess;

    while (max >= min) {
        guess = Math.floor((min + max)/2)
        if (array[guess] === targetValue){
            console.log(array[guess]);
            console.log("Guesses: " + numOfGuesses);
            return true;
        } else if (array[guess] < targetValue){
            numOfGuesses += 1;
            min = guess + 1;
        } else {
            numOfGuesses += 1;
            max = guess - 1;
        }
    }
    console.log("Couldn't find " + targetValue);
    return false;
}

binarySearch(randomNumbers, 99)