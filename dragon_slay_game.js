var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying) {
    if(youHit){
        console.log("The dragon has been hit!");
        totalDamage += damageThisRound;
            if (totalDamage >= 4){
                console.log("You win!");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
    } else {
        console.log("You're toast! The dragon wins.");
    }

    slaying = false;
}
