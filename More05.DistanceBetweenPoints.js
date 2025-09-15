function distanceBetweenPoints(x1, y1, x2, y2){

    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    return distance;
}

console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));