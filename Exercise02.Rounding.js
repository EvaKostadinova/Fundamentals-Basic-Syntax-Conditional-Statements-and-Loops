function rounding(num, precision){
    if (precision > 15){
        precision = 15;
    }

    let fixedNum = num.toFixed(precision);
    let fortmattedNum = parseFloat(fixedNum);
    console.log(fortmattedNum);

}

rounding(10.5, 3);