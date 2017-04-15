var gameNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < gameNumbers.length; i++) {
    if ((gameNumbers[i] % 3 == 0) && (gameNumbers[i] % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (gameNumbers[i] % 3 == 0) {
        console.log("Fizz");
    } else if (gameNumbers[i] % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(gameNumbers[i]);
    }
}
