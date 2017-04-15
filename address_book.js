var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Stewart',
        number: '864.123.4567',
        address: ['12 Sugar St', 'Greer', 'SC'],
    },

    steve: {
        firstName: 'Steve',
        lastName: 'Dempsey',
        number: '864-234-5678',
        address: ['21 Greenhouse Way', 'Greenville', 'SC'],
    }
};


//var list = function(friends){
//    for (var firstName in friends) {
//        console.log(firstName);
//    }
//};

var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstName == name) {
            console.log('First Name ' + friends[key.firstName);
            console.log('Last Name ' + friends[key].lastName);
            console.log('Number ' + friends[key].number);
            console.log('Address ' + friends[key].address);
            return friends[key];

        } else {
            console.log("No match found.");
        }
    }
};

search('Bill');
