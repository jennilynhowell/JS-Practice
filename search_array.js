/*jshint multistr:true */

var text = "text text text hello \
hello text text text William hello my \
name is hello hello William";

var myName = "Jennilyn";

var hits  = [];

//for loop
for (var i = 0; i < text.length; i++) {

    if (text[i] === 'J') {

        for (var j = i; j < i+myName.length; j = j+1) {
            hits.push(text[j]);
        }
    }

}

if (hits.length == 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
} 
