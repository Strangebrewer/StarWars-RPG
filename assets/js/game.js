
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
  $("#your-enemies-label").css("animation", "opac .8s");
  $("#your-enemies-label").css("animation-iteration-count", "infinite");
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

function cloneEnemyAvatar(p1, p2, p3) {
  $(p1).clone()
    .css("padding", "10px 30px")
    .css("animation", "fadein 2s")
    .css("opacity", "1")
    .attr("class", "chosen-enemy")
    .attr("id", p3)
    .appendTo("#defender-avatar");
  $("#attack-button").css("display", "unset");
  $("#attack-button").css("animation", "fadein 2s");
  $("#versus").text("vs.");
  $("#versus").css("animation", "fadein 2s");
  $(p2).css("display", "none");
  $(".choose-enemy").attr("disabled", true);
  $("#attack-button").attr("disabled", false);
  $("#defender-avatar-label").text("Defender");
  $("#defender-avatar-label").css("animation", "fadein 2s");
  $("#your-enemies-label").css("animation", "unset");
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

// BUTTONS TO CHOOSE YOUR DEFENDER
$("#enemy-one").on("click", "#choose-enemy-one", function () {
  cloneEnemyAvatar("#choose-enemy-one", "#enemy-one", enemyOne.playerId);
  playerTwo = enemyOne;
  currentTwoHealth = enemyOne.healthPoints;
});

$("#enemy-two").on("click", "#choose-enemy-two", function () {
  cloneEnemyAvatar("#choose-enemy-two", "#enemy-two", enemyTwo.playerId);
  playerTwo = enemyTwo;
  currentTwoHealth = enemyTwo.healthPoints;
});

$("#enemy-three").on("click", "#choose-enemy-three", function () {
  cloneEnemyAvatar("#choose-enemy-three", "#enemy-three", enemyThree.playerId);
  playerTwo = enemyThree;
  currentTwoHealth = enemyThree.healthPoints;
});

// BUTTONS TO CHOOSE YOUR AVATAR
$("#choose-player-one").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  playerOne = vader;
  currentOneHealth = playerOne.healthPoints;
  enemyOne = obiwan;
  enemyTwo = luke;
  enemyThree = porg;
  enemyAvatar("#choose-enemy-one", obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  enemyAvatar("#choose-enemy-two", luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  enemyAvatar("#choose-enemy-three", porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
});

$("#choose-player-two").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  playerOne = obiwan;
  currentOneHealth = playerOne.healthPoints;
  enemyOne = vader;
  enemyTwo = luke;
  enemyThree = porg;
  enemyAvatar("#choose-enemy-one", vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  enemyAvatar("#choose-enemy-two", luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  enemyAvatar("#choose-enemy-three", porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
});

$("#choose-player-three").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
  playerOne = luke;
  currentOneHealth = playerOne.healthPoints;
  enemyOne = vader;
  enemyTwo = obiwan;
  enemyThree = porg;
  enemyAvatar("#choose-enemy-one", vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  enemyAvatar("#choose-enemy-two", obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  enemyAvatar("#choose-enemy-three", porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
});

$("#choose-player-four").on("click", function () {
  chooseAvatarFunction();
  yourAvatar(porg.name, porg.imageLocation, porg.healthId, porg.healthPoints);
  playerOne = porg;
  currentOneHealth = playerOne.healthPoints;
  enemyOne = vader;
  enemyTwo = obiwan;
  enemyThree = luke;
  enemyAvatar("#choose-enemy-one", vader.name, vader.imageLocation, vader.healthId, vader.healthPoints);
  enemyAvatar("#choose-enemy-two", obiwan.name, obiwan.imageLocation, obiwan.healthId, obiwan.healthPoints);
  enemyAvatar("#choose-enemy-three", luke.name, luke.imageLocation, luke.healthId, luke.healthPoints);
});

var undefeatedEnemies = 3
var attacks = 0;
var currentOneHealth;
var currentTwoHealth;

// ATTACK BUTTON
$("#attack-button").on("click", function () {

  if (attacks > 0) {
    currentOneAttackPower += playerOne.attackPower;
  } else {
    currentOneAttackPower = playerOne.attackPower;
  }
  currentTwoHealth -= currentOneAttackPower;
  currentOneHealth -= playerTwo.counterAttackPower;

  $("#" + playerOne.healthId).text("Health: " + currentOneHealth);
  $("#" + playerTwo.healthId).text("Health: " + currentTwoHealth);

  if (currentTwoHealth <= 0) {
    $("#attack-button").attr("disabled", true);
    $("#your-enemies-label").text("Choose Next Defender");
    $("#your-enemies-label").css("animation", "opac .8s");
    $("#your-enemies-label").css("animation-iteration-count", "infinite");
    $(".choose-enemy").attr("disabled", false);
    $("#" + playerTwo.playerId).css("display", "none");
    undefeatedEnemies--;
    if (undefeatedEnemies === 0) {
      $("#your-enemies-label").css("display", "none");
      $("#attack-button").css("display", "none");
      $("#defender-avatar-label").css("display", "none");
      $("#versus").css("display", "none");
    }
  }

  if (currentOneHealth <= 0) {
    alert("You lose!");
    $("#attack-button").attr("disabled", true);
  }

  attacks++;
});

// prompt the user to choose the next defender (or tell them they lost because they're dead...)
// all while constantly pushing the results to the screen

// Character Objects
var vader = {
  name: "Darth Vader"
  , healthPoints: 250
  , attackPower: 18
  , counterAttackPower: 22
  , imageLocation: "assets/images/vader.jpg"
  , healthId: "vader-health"
  , playerId: "vader-avatar"
}

var obiwan = {
  name: "Obiwan Kenobi"
  , healthPoints: 200
  , attackPower: 14
  , counterAttackPower: 27
  , imageLocation: "assets/images/obi-wan.jpg"
  , healthId: "obiwan-health"
  , playerId: "obiwan-avatar"
}

var luke = {
  name: "Luke Skywalker"
  , healthPoints: 180
  , attackPower: 22
  , counterAttackPower: 16
  , imageLocation: "assets/images/luke.jpg"
  , healthId: "luke-health"
  , playerId: "luke-avatar"
}

var porg = {
  name: "a Porg"
  , healthPoints: 140
  , attackPower: 16
  , counterAttackPower: 30
  , imageLocation: "assets/images/porg.jpg"
  , healthId: "porg-health"
  , playerId: "porg-avatar"
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