/**
 * Created by Nicolas Ong on 2017-05-09.
 */
function Screen() {
    this.displayY = false;
    this.displayO = false;
    this.displayU = false;
    this.displayW = false;
    this.displayI = false;
    this.displayN = false;
    this.howManyLettersDisplayed = 0;
    this.screenNumber = -1;
    this.bgColor = "white";
    this.letterColor = "white";
    this.buttonColor = "white";

    // a method to assign screen number
    this.assignScreenNumber = function(number) {
        this.screenNumber = number;
    };

    // a method to assign the screen's colors
    this.assignColor = function(colorScheme) {
        this.bgColor = colorScheme[0];
        this.letterColor = colorScheme[1];
        this.buttonColor = colorScheme[2];
    };

    // a method to get the screen's colors
    this.getColor = function() {
        return [this.bgColor, this.letterColor, this.buttonColor]
    };

    // a method to change if a letter should be displayed
    this.addLetter = function(letter) {
        var truthDict = {"Y": this.displayY, "O": this.displayO, "U": this.displayU, "W": this.displayW, "I": this.displayI, "N": this.displayN};
        if (truthDict[letter] === false) {
            this.howManyLettersDisplayed++
        }
        if (letter === "Y") {
            this.displayY = true;
        } else if (letter === "O") {
            this.displayO = true;
        } else if (letter === "U") {
            this.displayU = true;
        } else if (letter === "W") {
            this.displayW = true;
        } else if (letter === "I") {
            this.displayI = true;
        } else if (letter === "N") {
            this.displayN = true;
        }
    };

    // a method to prevent a letter from being displayed.
    this.removeLetter = function(letter) {
        var truthDict = {"Y": this.displayY, "O": this.displayO, "U": this.displayU, "W": this.displayW, "I": this.displayI, "N": this.displayN};
        if (truthDict[letter] === true) {
            this.howManyLettersDisplayed--;
        }
        if (letter === "Y") {
            this.displayY = false;
        } else if (letter === "O") {
            this.displayO = false;
        } else if (letter === "U") {
            this.displayU = false;
        } else if (letter === "W") {
            this.displayW = false;
        } else if (letter === "I") {
            this.displayI = false;
        } else if (letter === "N") {
            this.displayN = false;
        }
    };

    // a method to display the screen
    this.displayScreen = function() {
        document.getElementById("button").style.backgroundColor = this.buttonColor;
        document.getElementById("theBody").style.backgroundColor = this.bgColor;
        if (this.displayY) {
            for (var a = 0; a < document.getElementsByClassName("Y").length; a++) {
                document.getElementsByClassName("Y")[a].style.backgroundColor = this.letterColor;
            }
            document.getElementById("yBranchOne").style.width = '25%';
            document.getElementById("yBranchOne").style.height = '40%';
            document.getElementById("yBranchTwo").style.width = '25%';
            document.getElementById("yBranchTwo").style.height = '40%';
            document.getElementById("yTrunk").style.width = '25%';
            document.getElementById("yTrunk").style.height = '70%';
        } else {
            for (var b = 0; b < document.getElementsByClassName("Y").length; b++) {
                document.getElementsByClassName("Y")[b].style.backgroundColor = this.letterColor;
            }
            document.getElementById("yBranchOne").style.width = '0';
            document.getElementById("yBranchOne").style.height = '0';
            document.getElementById("yBranchTwo").style.width = '0';
            document.getElementById("yBranchTwo").style.height = '0';
            document.getElementById("yTrunk").style.width = '0';
            document.getElementById("yTrunk").style.width = '0';
        }
        if (this.displayO) {
            for (var c = 0; c < document.getElementsByClassName("O").length; c++) {
                document.getElementsByClassName("O")[c].style.backgroundColor = this.letterColor;
            }
            document.getElementById("oHole").style.backgroundColor = this.bgColor;
            document.getElementById("oBody").style.width = '100%';
            document.getElementById("oBody").style.height = '100%';
            document.getElementById("oHole").style.width = '50%';
            document.getElementById("oHole").style.height = '70%';
        } else {
            for (var d = 0; d < document.getElementsByClassName("Y").length; d++) {
                document.getElementsByClassName("Y")[d].style.backgroundColor = this.letterColor;
            }
            document.getElementById("oHole").style.backgroundColor = this.bgColor;
            document.getElementById("oBody").style.width = '0';
            document.getElementById("oBody").style.height = '0';
            document.getElementById("oHole").style.width = '0';
            document.getElementById("oHole").style.height = '0';
        }
        if (this.displayU) {
            for (var e = 0; e < document.getElementsByClassName("U").length; e++) {
                document.getElementsByClassName("U")[e].style.backgroundColor = this.letterColor;
            }
            document.getElementById("uHole1").style.backgroundColor = this.bgColor;
            document.getElementById("uHole2").style.backgroundColor = this.bgColor;
            document.getElementById("uBody1").style.width = '100%';
            document.getElementById("uBody1").style.height = '83.5%';
            document.getElementById("uBody2").style.width = '16.05vmin';
            document.getElementById("uBody2").style.height = '16.05vmin';
            document.getElementById("uHole1").style.width = '50%';
            document.getElementById("uHole1").style.height = '82%';
            document.getElementById("uHole2").style.width = '7.97vmin';
            document.getElementById("uHole2").style.height = '7.97vmin';
        } else {
            for (var f = 0; f < document.getElementsByClassName("U").length; f++) {
                document.getElementsByClassName("U")[f].style.backgroundColor = this.letterColor;
            }
            document.getElementById("uHole1").style.backgroundColor = this.bgColor;
            document.getElementById("uHole2").style.backgroundColor = this.bgColor;
            document.getElementById("uBody1").style.width = '0';
            document.getElementById("uBody1").style.height = '0';
            document.getElementById("uBody2").style.width = '0';
            document.getElementById("uBody2").style.height = '0';
            document.getElementById("uHole1").style.width = '0';
            document.getElementById("uHole1").style.height = '0';
            document.getElementById("uHole2").style.width = '0';
            document.getElementById("uHole2").style.height = '0';
        }
        if (this.displayW) {
            for (var g = 0; g < document.getElementsByClassName("W").length; g++) {
                document.getElementsByClassName("W")[g].style.backgroundColor = this.letterColor;
            }
            document.getElementById("wSegment1").style.width = '25%';
            document.getElementById("wSegment1").style.height = '100%';
            document.getElementById("wSegment2").style.width = '25%';
            document.getElementById("wSegment2").style.height = '50%';
            document.getElementById("wSegment3").style.width = '25%';
            document.getElementById("wSegment3").style.height = '50%';
            document.getElementById("wSegment4").style.width = '25%';
            document.getElementById("wSegment4").style.height = '100%';
        } else {
            for (var h = 0; h < document.getElementsByClassName("W").length; h++) {
                document.getElementsByClassName("W")[h].style.backgroundColor = this.letterColor;
            }
            document.getElementById("wSegment1").style.width = '0';
            document.getElementById("wSegment1").style.height = '0';
            document.getElementById("wSegment2").style.width = '0';
            document.getElementById("wSegment2").style.height = '0';
            document.getElementById("wSegment3").style.width = '0';
            document.getElementById("wSegment3").style.height = '0';
            document.getElementById("wSegment4").style.width = '0';
            document.getElementById("wSegment4").style.height = '0';
        }
        if (this.displayI) {
            for (var i = 0; i < document.getElementsByClassName("I").length; i++) {
                document.getElementsByClassName("I")[i].style.backgroundColor = this.letterColor;
            }
            document.getElementById("iTop").style.width = '100%';
            document.getElementById("iTop").style.height = '10%';
            document.getElementById("iMid").style.width = '30%';
            document.getElementById("iMid").style.height = '90%';
            document.getElementById("iBottom").style.width = '100%';
            document.getElementById("iBottom").style.height = '10%';
        } else {
            for (var j = 0; j < document.getElementsByClassName("I").length; j++) {
                document.getElementsByClassName("I")[j].style.backgroundColor = this.letterColor;
            }
            document.getElementById("iTop").style.width = '0';
            document.getElementById("iTop").style.height = '0';
            document.getElementById("iMid").style.width = '0';
            document.getElementById("iMid").style.height = '0';
            document.getElementById("iBottom").style.width = '0';
            document.getElementById("iBottom").style.height = '0';
        }
        if (this.displayN) {
            for (var k = 0; k < document.getElementsByClassName("N").length; k++) {
                document.getElementsByClassName("N")[k].style.backgroundColor = this.letterColor;
            }
            document.getElementById("nPart1").style.width = '25%';
            document.getElementById("nPart1").style.height = '100%';
            document.getElementById("nPart2").style.width = '25%';
            document.getElementById("nPart2").style.height = '101%';
            document.getElementById("nPart3").style.width = '25%';
            document.getElementById("nPart3").style.height = '100%';
        } else {
            for (var l = 0; l < document.getElementsByClassName("N").length; l++) {
                document.getElementsByClassName("N")[l].style.backgroundColor = this.letterColor;
            }
            document.getElementById("nPart1").style.width = '0';
            document.getElementById("nPart1").style.height = '0';
            document.getElementById("nPart2").style.width = '0';
            document.getElementById("nPart2").style.height = '0';
            document.getElementById("nPart3").style.width = '0';
            document.getElementById("nPart3").style.height = '0';
        }
    };
}

/* Creating the Starting Screens, giving them a letter, color scheme, and a number. */

var screenOne = new Screen();
screenOne.assignColor(["#5F407A", "#e190b3", "#f9e4ba"]); //good, three colors
screenOne.assignScreenNumber(1);
var screenTwo = new Screen();
screenTwo.assignColor(["#f3eaee", "#96d1e6", "#e55481"]); //good three colors
screenTwo.addLetter("Y");
screenTwo.assignScreenNumber(2);
var screenThree = new Screen();
screenThree.assignColor(["#f9edda", "#c3d4ba", "#81a9a1"]); //good, two colors
screenThree.addLetter("O");
screenThree.assignScreenNumber(3);
var screenFour = new Screen();
screenFour.assignColor(["#A61900", "#D94C00", "#C22D00"]); //good, one color
screenFour.addLetter("U");
screenFour.assignScreenNumber(4);
var screenFive = new Screen();
screenFive.assignColor(["#1d033f", "#5829d1", "#5b1bad"]); //good, one color
screenFive.assignScreenNumber(5);
var screenSix = new Screen();
screenSix.assignColor(["#D0DB97", "#69B578", "#3A7D44"]); //good, one color
screenSix.addLetter("W");
screenSix.assignScreenNumber(6);
var screenSeven = new Screen();
screenSeven.assignColor(["#e35d76", "#8e5582", "#494484"]); //good, two colors
screenSeven.addLetter("I");
screenSeven.assignScreenNumber(7);
var screenEight = new Screen();
screenEight.assignColor(["#9CCEFF", "#CEFF9C", "#FF9CCE"]); //good, two colors
screenEight.addLetter("N");
screenEight.assignScreenNumber(8);

/* Variables for the game. */

var currentScreen = 1;
var screenDict = {1: screenOne, 2: screenTwo, 3: screenThree, 4: screenFour, 5: screenFive, 6: screenSix, 7: screenSeven, 8: screenEight};
var letterDict = {1: "Y", 2: "O", 3: "U", 4: "W", 5: "I", 6: "N"};
var lastLetterPressed = "I";

/* Button Functions */

/* Regular Button */

onButtonPush = function() {
    if (currentScreen < 8) {
        currentScreen++
    } else {
        currentScreen = 1
    }
    screenDict[currentScreen].displayScreen();
};

/* Y */

// moves itself to the previous screen. if first screen, goes to last.

onYButtonPush = function(letter) {
    lastLetterPressed = letter;
    //console.log("removing " + letter + " from the current screen...");
    screenDict[currentScreen].removeLetter(letter);
    if (currentScreen > 1) {
        currentScreen--;
        //console.log("rotating the screen's color schemes backwards...");
        rotateScreenColorsBackward();
        //console.log("adding " + letter + " to the previous screen...");
        screenDict[currentScreen].addLetter(letter);
        //console.log("displaying the previous screen...");
        screenDict[currentScreen].displayScreen();
    } else {
        currentScreen = 8;
        //console.log("rotating the screen's color schemes backwards...");
        rotateScreenColorsBackward();
        //console.log("adding " + letter + " to the last screen...");
        screenDict[currentScreen].addLetter(letter);
        //console.log("displaying the last screen...");
        screenDict[currentScreen].displayScreen();
    }
};

/* O */

//moves a copy of itself on the next screen, can't go past 8.

onOButtonPush = function(letter) {
    lastLetterPressed = letter;
    if (currentScreen < 8) {
        currentScreen++;
        //console.log("rotating the screen's color schemes forwards...");
        rotateScreenColorsForward();
        //console.log("adding " + letter + " to the next screen...");
        screenDict[currentScreen].addLetter(letter);
        //console.log("displaying the next screen...");
        screenDict[currentScreen].displayScreen();
    }
};

/* U */
// u -> if on an even screen, reverse the button's direction. if odd, fix it.

onUButtonPush = function(letter) {
    lastLetterPressed = letter;
    if (screenDict[currentScreen].screenNumber % 2 === 0) {
        //console.log("setting the button's direction to reverse...");
        document.getElementById("button").onclick = onReversedButtonPush;
    } else {
        //console.log("setting the button's direction to forwards...");
        document.getElementById("button").onclick = onButtonPush;
    }
};

/* W */
// sends the next letters clicked to the screen with the number same as the amount of letters on the current screen.

var onClickDict = {};
var buttonDict = {0: "button", 1: "Y", 2: "O", 3: "U", 4: "W", 5: "I", 6: "N"};

onWButtonPush = function(letter) {
    lastLetterPressed = letter;
    onClickDict = onClickDictGenerator();
    //console.log("changing the button to do nothing...");
    document.getElementById("button").onclick = doNothing;
    //console.log("changing " + letter + "'s function...");
    for (var j = 0; j < document.getElementsByClassName(letter).length; j++) {
        document.getElementsByClassName(letter)[j].onclick = onLetterButtonPushModifiedByLetter;
    }
    // change all the letters' on clicks to the following function.
    //console.log("changing the rest of the letters' functions...");
    var letterArray = ["Y", "O", "U", "W", "I", "N"];
    for (var i = 0; i < 6; i++) {
        if (letter !== letterArray[i]) {
            for (var k = 0; k < document.getElementsByClassName(letterArray[i]).length; k++) {
                document.getElementsByClassName(letterArray[i])[k].setAttribute('onclick', "onNonLetterButtonPushModifiedByLetter('" + letterArray[i] + "')");
            }
        }
    }
};

onNonLetterButtonPushModifiedByLetter = function(letter) {
    //console.log("removing " + letter + " from the screen...");
    screenDict[currentScreen].removeLetter(letter);
    //console.log("adding " + letter + " to another screen...");
    screenDict[screenDict[currentScreen].howManyLettersDisplayed].addLetter(letter);
    //console.log("re-rendering the screen...");
    screenDict[currentScreen].displayScreen()
};

onLetterButtonPushModifiedByLetter = function() {
    //console.log("restoring the button's function...");
    document.getElementById("button").setAttribute('onclick', onClickDict[0]);
    //console.log("restoring the rest of the letters' functions...");
    for (var i = 1; i < 7; i++) {
        for (var k = 0; k < document.getElementsByClassName(buttonDict[i]).length; k++) {
            document.getElementsByClassName(buttonDict[i])[k].setAttribute('onclick', onClickDict[i]);
        }
    }
};

/* I */

// switch the I's power with the power of the last letter pressed.

onIButtonPush = function(currentLetter) {
    //console.log("finding the function of the last letter clicked...");
    var previousOnClick = parenthesesRemover(document.getElementsByClassName(lastLetterPressed)[0].getAttribute("onclick"));
    //console.log("replacing " + currentLetter + "'s function with " + lastLetterPressed + "'s...");
    for (var k = 0; k < document.getElementsByClassName(currentLetter).length; k++) {
        document.getElementsByClassName(currentLetter)[k].setAttribute('onclick', previousOnClick + "('" + currentLetter + "')");
    }
    //console.log("replacing " + lastLetterPressed + "'s function with " + currentLetter + "'s...");
    for (var l = 0; l < document.getElementsByClassName(lastLetterPressed).length; l++) {
        document.getElementsByClassName(lastLetterPressed)[l].setAttribute('onclick', "onIButtonPush('" + lastLetterPressed + "')");
    }
};

/* N */
// teleports a copy of the selected letter to the current screen. Choose letter with button presses.

onNButtonPushStart = function(letter) {
    lastLetterPressed = letter;
    onClickDict = onClickDictGenerator();
    //console.log("changing the button's function...");
    document.getElementById("button").onclick = onButtonPushModifiedByN;
    //console.log("changing " + letter + "'s function...");
    for (var k = 0; k < document.getElementsByClassName(letter).length; k++) {
        document.getElementsByClassName(letter)[k].setAttribute('onclick', "onNButtonPushEnd('" + letter + "')");
    }
    //console.log("making the rest of the letters do nothing...");
    var letterArray = ["Y", "O", "U", "W", "I", "N"];
    for (var i = 0; i < 6; i++) {
        if (letter !== letterArray[i]) {
            for (var l = 0; l < document.getElementsByClassName(letterArray[i]).length; l++) {
                document.getElementsByClassName(letterArray[i])[l].onclick = doNothing;
            }
        }
    }
};

onNButtonPushEnd = function(letter) {
    //console.log("restoring " + letter + "'s original function...");
    for (var k = 0; k < document.getElementsByClassName(letter).length; k++) {
        document.getElementsByClassName(letter)[k].setAttribute('onclick', "onNButtonPushStart('" + letter + "')");
    }
    //console.log("copying selected letter to current screen...");
    screenDict[currentScreen].addLetter(letterDict[letter2BTeleported]);
    //console.log("re-rendering the screen...");
    screenDict[currentScreen].displayScreen();
    //console.log("restoring the button's function...");
    document.getElementById("button").setAttribute('onclick', onClickDict[0]);
    //console.log("restoring the rest of the letter's functions...");
    for (var i = 1; i < 7; i++) {
        for (var l = 0; l < document.getElementsByClassName(buttonDict[i]).length; l++) {
            document.getElementsByClassName(buttonDict[i])[l].setAttribute('onclick', onClickDict[i]);
        }
    }
};

var letter2BTeleported = 1;

onButtonPushModifiedByN = function() {
    if (letter2BTeleported < 6) {
        letter2BTeleported++
    } else {
        letter2BTeleported = 1
    }
    //console.log("selected " + letterDict[letter2BTeleported] + "...")
};

/* More I functions */



/* misc functions */

// when run, all eight screens give their color schemes to the one ahead of them.
rotateScreenColorsForward = function() {
    var colorSchemeDict = {1: screenDict[8].getColor(), 2: screenDict[1].getColor(), 3: screenDict[2].getColor(), 4: screenDict[3].getColor(),
        5: screenDict[4].getColor(), 6: screenDict[5].getColor(), 7: screenDict[6].getColor(), 8: screenDict[7].getColor()};
    for (var i = 1; i < 9; i++) {
        screenDict[i].assignColor(colorSchemeDict[i]);
    }
};

// when run, all eight screens give their color schemes to the ome behind them.
rotateScreenColorsBackward = function() {
    var colorSchemeDict = {1: screenDict[2].getColor(), 2: screenDict[3].getColor(), 3: screenDict[4].getColor(), 4: screenDict[5].getColor(),
        5: screenDict[6].getColor(), 6: screenDict[7].getColor(), 7: screenDict[8].getColor(), 8: screenDict[1].getColor()};
    for (var i = 1; i < 9; i++) {
        screenDict[i].assignColor(colorSchemeDict[i]);
    }
};

// reverses the button's direction
onReversedButtonPush = function() {
    if (currentScreen > 1) {
        currentScreen--
    } else {
        currentScreen = 8
    }
    screenDict[currentScreen].displayScreen();
};

// takes in a function and a input, and creates a string with both.
functionAndInputMerger = function(func, input) {
    func = func.split("(");
    return func[0] + "(" + input + ")";
};

// takes a function and removes the parentheses part.
parenthesesRemover = function(func) {
    func = func.split("(");
    return func[0]
};

// finds the onclick of a letter.
onClickFinder = function(letter) {
    var theOnClick = "";
    if (letter === "Y") {
        theOnClick = document.getElementById("yTrunk").getAttribute("onclick")
    } else if (letter === "O") {
        theOnClick = document.getElementById("oBody").getAttribute("onclick")
    } else if (letter === "U") {
        theOnClick = document.getElementById("uBody1").getAttribute("onclick")
    } else if (letter === "W") {
        theOnClick = document.getElementById("wSegment1").getAttribute("onclick")
    } else if (letter === "I") {
        theOnClick = document.getElementById("iTop").getAttribute("onclick")
    } else if (letter === "N") {
        theOnClick = document.getElementById("nPart1").getAttribute("onclick")
    } else if (letter === "button") {
        theOnClick = document.getElementById("button").getAttribute("onclick")
    }
    return theOnClick
};

// creates a dictionary of all the onclicks of the letters.
// button, y, o, u, w, i, n
onClickDictGenerator = function() {
    return {0: onClickFinder("button"), 1: onClickFinder("Y"), 2: onClickFinder("O"), 3: onClickFinder("U"), 4: onClickFinder("W"), 5: onClickFinder("I"), 6: onClickFinder("N")}
};

doNothing = function() {

};

screenOne.displayScreen();
