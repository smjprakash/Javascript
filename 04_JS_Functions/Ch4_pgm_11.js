// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var q1;
var q2;
var q3;
var cia1;
var myTest;
q1 = {
    question : "What type of language is JavaScript ?",
    optionA : "Object Oriented",
    optionB : "Object Based",
    optionC : "High level"
    }

q2 = {
    question : "Function and var are known as",
    optionA : "Variables",
    optionB : "Class",
    optionC : "Keywords"
}
q3 = {
    question : "Which of the following is not a datatype ?",
    optionA : "True",
    optionB : "String",
    optionC : "number"
    
}

var myTest;
myTest = function() {
    console.log("Question 1 :" + cia1.question);
    console.log("Option A :" + cia1.optionA);
    console.log("Option B :" + cia1.optionB);
    console.log("Option C :" + cia1.optionC);
    }
cia1 = q1;
myTest()

cia1 = q2;
myTest()
cia1 = q3;
myTest()
/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */