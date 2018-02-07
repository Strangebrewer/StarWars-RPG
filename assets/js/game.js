
var yourAvatarButton = $("<button>");
var yourAvatarName = $("<h3>");
var yourAvatarImg = $("<img>");
var yourAvatarHealth = $("<h4>");
var avatarLabel = $("<h5>");
var enemyAvatarName = $("<h3>");
var enemyAvatarImg = $("<img>");
var enemyAvatarHealth = $("<h4>");
var enemyAvatarLabel = $("<h5>");
var playerOne;
var playerTwo;

// Functions

function chooseAvatarFadeout() {
  $(".main-container").css("animation", "fadeout 1s");
  $(".main-container").css("opacity", "0");
}

function avatarFadein() {
  $("#chosen-player").css("animation", "fadein 2s");
  $("#your-avatar-label").css("animation", "fadein 2s");
  $("#enemy-one").css("animation", "fadein 2s");
  $("#enemy-two").css("animation", "fadein 2s");
  $("#enemy-three").css("animation", "fadein 2s");
  $("#choose-enemy-one").css("animation", "fadein2 2s");
  $("#choose-enemy-two").css("animation", "fadein2 2s");
  $("#choose-enemy-three").css("animation", "fadein2 2s");
  $("#your-enemies-label").css("animation", "fadein 2s");
  $(".choose-avatar").attr("disabled", true);
}

function avatarButton() {
  yourAvatarButton.attr("id", "chosen-player");
  $("#your-avatar").append(yourAvatarButton);
  var chosenPlayer = $("#chosen-player");
  chosenPlayer.css("background-color", "#181818");
  chosenPlayer.css("border-radius", "10px");
  chosenPlayer.css("padding", "10px 30px");
  chosenPlayer.css("border", "none");
  chosenPlayer.css("margin", "6px auto");
}

function yourAvatar(name, imageLocation, healthId, healthPoints) {
  var chosenPlayer = $("#chosen-player");
  yourAvatarName.text(name);
  yourAvatarImg.attr("src", imageLocation);
  yourAvatarHealth.attr("id", healthId);
  yourAvatarHealth.text("Health: " + healthPoints);
  avatarLabel.text("Your Character");
  chosenPlayer.append(yourAvatarName);
  chosenPlayer.append(yourAvatarImg);
  chosenPlayer.append(yourAvatarHealth);
  $("#your-avatar-label").append(avatarLabel);
  $("#your-avatar img").css("border", "6px solid #fff");
}

function enemyAvatarButton(p1, p2, p3) {
  var enemyAvatarButton = $("<button>");
  $("#your-enemies-label").text("Choose Defender");
  enemyAvatarName.text(name)
  enemyAvatarButton.attr("class", "choose-enemy");
  enemyAvatarButton.attr("id", p1);
  $(p2).append(enemyAvatarButton);
  var enemyAvatar = $(p3);
  enemyAvatar.css("background-color", "#181818");
  enemyAvatar.css("border-radius", "10px");
  enemyAvatar.css("margin", "6px auto");
  enemyAvatar.css("padding", "6px 30px");
  enemyAvatar.css("border", "none");
}

function enemyAvatar(p1, name, imageLocation, healthId, healthPoints) {
  var enemyButton = $(p1);
  var enemyAvatarName = $("<h3>");
  var enemyAvatarImg = $("<img>");
  var enemyAvatarHealth = $("<h4>");
  enemyAvatarName.text(name);
  enemyAvatarImg.attr("src", imageLocation);
  enemyAvatarHealth.attr("id", healthId);
  enemyAvatarHealth.text("Health: " + healthPoints)
  enemyButton.append(enemyAvatarName);
  enemyButton.append(enemyAvatarImg);
  enemyButton.append(enemyAvatarHealth);
  $(".choose-enemy img").css("border", "6px solid #9b0000");
}

function cloneEnemyAvatar(p1, p2) {
  $(p1).clone()
    .css("padding", "10px 30px")
    .css("animation", "fadein 2s")
    .css("opacity", "1")
    .attr("class", "chosen-enemy")
    .attr("id", "defender-one")
    .appendTo("#defender-avatar");
  $("#attack-button").css("display", "unset");
  $("#attack-button").css("animation", "fadein 2s");
  $("#versus").text("vs.");
  $("#versus").css("animation", "fadein 2s");
  $(p2).css("display", "none");
  $(".choose-enemy").attr("disabled", true);
  $("#defender-avatar-label").text("Defender");
  $("#defender-avatar-label").css("animation", "fadein 2s");
}

// Sets the enemy avatars after the Player Avatar has been chosen
function chooseAvatarFunction() {
  chooseAvatarFadeout();
  avatarButton();
  enemyAvatarButton("choose-enemy-one", "#enemy-one", "#choose-enemy-one");
  enemyAvatarButton("choose-enemy-two", "#enemy-two", "#choose-enemy-two");
  enemyAvatarButton("choose-enemy-three", "#enemy-three", "#choose-enemy-three");
  avatarFadein();
}

// Chooses which enemy avatar you wish to fight
$("#enemy-one").on("click", "#choose-enemy-one", function () {
  cloneEnemyAvatar("#choose-enemy-one", "#enemy-one");
  playerTwo = enemyOne;
});

$("#enemy-two").on("click","#choose-enemy-two", function () {
  cloneEnemyAvatar("#choose-enemy-two", "#enemy-two");
  playerTwo = enemyTwo;
});

$("#enemy-three").on("click", "#choose-enemy-three", function () {
  cloneEnemyAvatar("#choose-enemy-three", "#enemy-three");
  playerTwo = enemyThree;
});

// Choose your avatar and populating the enemies list
$("#choose-player-one").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  playerOne = vader;
  enemyOne = obiwan;
  enemyTwo = luke;
  enemyThree = porg;
  enemyAvatar("#choose-enemy-one", obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  enemyAvatar("#choose-enemy-two", luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  enemyAvatar("#choose-enemy-three", porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
  console.log(playerOne.name, enemyOne.name, enemyTwo.name, enemyThree.name);
});

$("#choose-player-two").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  playerOne = obiwan;
  enemyOne = vader;
  enemyTwo = luke;
  enemyThree = porg;
  enemyAvatar("#choose-enemy-one", vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  enemyAvatar("#choose-enemy-two", luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  enemyAvatar("#choose-enemy-three", porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
  console.log(playerOne.name, enemyOne.name, enemyTwo.name, enemyThree.name);
});

$("#choose-player-three").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  playerOne = luke;
  enemyOne = vader;
  enemyTwo = obiwan;
  enemyThree = porg;
  enemyAvatar("#choose-enemy-one", vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  enemyAvatar("#choose-enemy-two", obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  enemyAvatar("#choose-enemy-three", porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
  console.log(playerOne.name, enemyOne.name, enemyTwo.name, enemyThree.name);
});

$("#choose-player-four").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
  playerOne = porg;
  enemyOne = vader;
  enemyTwo = obiwan;
  enemyThree = luke;
  enemyAvatar("#choose-enemy-one", vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  enemyAvatar("#choose-enemy-two", obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  enemyAvatar("#choose-enemy-three", luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  console.log(playerOne.name, enemyOne.name, enemyTwo.name, enemyThree.name);
});

$("#attack-button").on("click", function() {
  var attacks = 0;
  var currentOneHealth = playerOne.healthPoints;
  var currentTwoHealth = playerTwo.healthPoints;
  var currentOneAttackPower = playerOne.attackPower;
  var currentTwoAttackPower = playerTwo.attackPower;

  playerTwo.healthPoints -= playerOne.attackPower;
  playerOne.healthPoints -= playerTwo.counterAttackPower;

  // so, in addition to reducing each one's health points, I also need to:
      // increase attack power with each attack
      // run a conditional to check when health points hit zero, followed by...
      // prompt the user to choose the next defender (or tell them they lost because they're dead...)
      // all while constantly pushing the results to the screen


  console.log(playerOne.healthPoints, playerTwo.healthPoints);
  attacks++;
});


// Character Objects
var vader = {
  name: "Darth Vader"
  , healthPoints: 250
  , attackPower: 18
  , counterAttackPower: 22
  , imageLocation: "assets/images/vader.jpg"
  , healthId: "vader-health"
}

var obiwan = {
  name: "Obiwan Kenobi"
  , healthPoints: 200
  , attackPower: 14
  , counterAttackPower: 27
  , imageLocation: "assets/images/obi-wan.jpg"
  , healthId: "obiwan-health"
}

var luke = {
  name: "Luke Skywalker"
  , healthPoints: 180
  , attackPower: 22
  , counterAttackPower: 16
  , imageLocation: "assets/images/luke.jpg"
  , healthId: "luke-health"
}

var porg = {
  name: "a Porg"
  , healthPoints: 140
  , attackPower: 16
  , counterAttackPower: 30
  , imageLocation: "assets/images/porg.jpg"
  , healthId: "porg-health"
}



// $("#btnSubmit").attr("disabled", true);
// $('#btnSubmit').attr("disabled", false);



// POSSIBLE CODE FOR A GAME WHERE YOU PICK THE THEME

// , pickTheme: function() {
//   // click button

// }




// buttons - one for each theme
// once you click the button, the theme lays out and the buttons disappear


// possible themes:
  // so-shall media; names - Rebbit, Facebake, Instagroan, Twatter
  // Battle of the Bands
  // Star Trek Captains: Kirk, Picard, Archer, Sisko
  // The Matrix: Neo, Agent Smith, Trinity, Cipher


  // CLICK EVENTS CAN'T BE BOUND TO CREATED ELEMENTS; THEY MUST BE DELEGATED FROM ELEMENTS TAHT ARE PART OF THE ORIGINAL DOCUMENT:
  // $("#original-document-id-name").on("click", "#delegated-id-name", function () {
  //   $("#stuff").attr("blah", "meh");
  // });