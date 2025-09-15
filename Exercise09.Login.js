function login(array){
    let username = array[0];
    let password = username.split(``).reverse().join(``);
    let attempts = 0;

    for(let i = 1; i <= array.length; i++){
        let currentAttempt = array[i];
        attempts++

        if(currentAttempt === password){
            console.log(`User ${username} logged in.`);
            return;
        }

        if(attempts === 4){
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);
        
    }

}

login(['sunny','rainy','cloudy','sunny','not',

'sunny']);