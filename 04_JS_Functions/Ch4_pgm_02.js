// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

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

movie2 = {
  title: "Airforce One",
  actors: "Harrison Ford, Liesel Matthews",
  directors: "Wolfgang Petersen, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
console.log('') 
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
console.log('') 
console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

var week1 = {
  Sunday : "Go to church",
  Monday : "Prepare python lab exercise",
  tuesday : "Complete lab exercises 4 and 5"
}

var week2 = {
  Thursday : "Complete JavaScript exercises",
  Friday : "Finish python exercises 7 and 8",
  Saturday : "Mysql class for KGM"
}
console.log(week1, week2);
/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */