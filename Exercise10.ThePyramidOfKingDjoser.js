function thePyramidOfKingDjoser(base, increment){
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;

    while(base > 2){
        step++;
        let totalArea = base * base;
        let innerArea = (base - 2) * (base -2);

        let stoneNeeded = innerArea * increment;
        let outerLayer = (totalArea - innerArea) * increment;

        stone += stoneNeeded;

        if(step % 5 === 0){
            lapisLazuli += outerLayer;
        } else {
            marble += outerLayer;
        }

        base -= 2;

    }

    step++;
    gold += (base * base) * increment;

    let pyramidFinalHeihgt = Math.floor(step * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidFinalHeihgt)}`);

}

thePyramidOfKingDjoser(23, 0.5);