function sortNumbers(num1, num2, num3){
    let numbers = [num1, num2, num3];

    numbers.sort((x, y) => y - x);

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }
}

sortNumbers(0, 0, 2);