// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message + " Twinkle in the high");
};

showMessage("It's full of stars! In the dark sky");
showMessage("The Moon is the queen !");
showMessage("Makes the sky glow")



/* Further Adventures
 *
 * 1) Change the message in the parentheses
 *    when showMessage is called on line 9.
 *
 * The value in the parentheses when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 9.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */