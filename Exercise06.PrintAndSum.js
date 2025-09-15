function printAndNum(start, end){
    let sum = 0;
    let allNumsStr = ``;

    for(let i = start; i <= end; i++){
        allNumsStr += i + ` `;
        sum += i;
    }

console.log(allNumsStr);

console.log(`Sum: ${sum}`);
    
}

printAndNum(5, 10);