var user = prompt("Let's go on a trip. Do you choose BEACH, MOUNTAINS, or a CITY?").toUpperCase();

switch(user) {
    case 'BEACH':
        var beach = prompt("I would love to go to the beach! Is it going to be HOT or COLD there?").toUpperCase();
        var shop = prompt("Do you want to SHOP, be BEACH BUMS, or BOTH?").toUpperCase();
        if (beach == 'HOT' && (shop == 'BEACH BUMS' || 'BOTH')) {
            console.log("Remember to pack sunscreen!");
        } else if (beach == 'COLD' || shop == 'SHOP') {
            console.log("I'll be sure to pack a hat and scarf, in that case.");
        } else {
            console.log("Either way we'll want to go swimming!");
        };

    break;

    case 'MOUNTAINS':
        var mountains = prompt("Love the mountains any time of year. Do you want to SKI or HIKE?").toUpperCase();
        if (mountains == 'SKI') {
            console.log("I'll bring my gear, and some extra hot cocoa!");
        } else if (mountains == 'HIKE') {
            console.log("Sounds fun! I'll pack my boots and bug spray.");
        } else {
            console.log("That sounds fun, too!");
        };

    break;

    case 'CITY':
        var city = prompt("Let's go! Should we FLY or DRIVE?").toUpperCase();
        if (city == 'FLY') {
            console.log("Great. I will scope out good restaurants there if you will check on flights.");
        } else if (city == 'DRIVE') {
            console.log("I love a good road trip. I'll drive if you bring snacks!");
        } else {
            console.log("What's that? You think we should hire a spaceship?");
        };

    break;

    default:
        console.log("That's a great idea - let's go!");
           

};
