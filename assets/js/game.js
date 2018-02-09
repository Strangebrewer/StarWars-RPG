  var songs = ["theme-song", "cantina-song", "imperial-march", "rebel-fleet"];
  var playerOneFlag = true;
  var playerTwoFlag = true;
  var playerThreeFlag = true;
  var playerFourFlag = true;
  var defenderFlag = true;
  var countFlag = 0;

  // CHARACTER OBJECTS
  var vader = {
    name: "Darth Vader"
    , healthPoints: 213
    , attackPower: 8
    , counterAttackPower: 22
    , healthId: "vader-health"
    , divId: "avatar-one"
    , defeatLocation: "7 / 2 / auto / auto"
  }

  var obiwan = {
    name: "Obiwan Kenobi"
    , healthPoints: 187
    , attackPower: 9
    , counterAttackPower: 19
    , healthId: "obiwan-health"
    , divId: "avatar-two"
    , defeatLocation: "7 / 3 / auto / auto"
  }

  var luke = {
    name: "Luke Skywalker"
    , healthPoints: 230
    , attackPower: 6
    , counterAttackPower: 18
    , healthId: "luke-health"
    , divId: "avatar-three"
    , defeatLocation: "7 / 4 / auto / auto"
  }

  var porg = {
    name: "a Porg"
    , healthPoints: 155
    , attackPower: 11
    , counterAttackPower: 26
    , healthId: "porg-health"
    , divId: "avatar-four"
    , defeatLocation: "7 / 5 / auto / auto"
  }

  $("#vader-health").text("Health: " + vader.healthPoints);
  $("#obiwan-health").text("Health: " + obiwan.healthPoints);
  $("#luke-health").text("Health: " + luke.healthPoints);
  $("#porg-health").text("Health: " + porg.healthPoints);

  function fadeOut(p1) {
    $(p1).css("animation", "fadeout 1.2s");
    $(p1).css("opacity", "0");
  }

  function fadeIn(p1) {
    $(p1).css("animation", "fadein 1.4s");
    $(p1).css("opacity", "1");
  }

  function fadeInDead(p1) {
    $(p1).css("animation", "fadein3 1.4s");
    $(p1).css("opacity", ".7");
  }

  function moveEnemies(p1, p2, p3) {
    fadeOut(p1);
    fadeOut(p2);
    fadeOut(p3);
    setTimeout(function () {
      $(p1).css("grid-row", "5");
      $(p1).css("grid-column", "2");
      $(p1 + " img").css("border-color", "#9b0000")
      fadeIn(p1);
    }, 1200)
    setTimeout(function () {
      $(p2).css("grid-row", "5");
      $(p2).css("grid-column", "3 / 5");
      $(p2 + " img").css("border-color", "#9b0000")
      fadeIn(p2);
    }, 1200)
    setTimeout(function () {
      $(p3).css("grid-row", "5");
      $(p3).css("grid-column", "5");
      $(p3 + " img").css("border-color", "#9b0000")
      fadeIn(p3);
    }, 1200)
  }

  function choosePlayerOne(p1, p2, p3, p4) {
    fadeOut(p1);
    fadeOut("#choose-avatar-heading");
    setTimeout(function () {
      $(p1).css("grid-row", "2");
      $(p1).css("grid-column", "2 / 4");
      $(p1 + " img").css("border-color", "#fff")
      $("#choose-avatar-heading").text("Choose Defender");
      fadeIn(p1);
      fadeIn("#your-character-label");
      fadeIn("#choose-avatar-heading")
    }, 1200)
    moveEnemies(p2, p3, p4);
  }

  function chooseDefender(p1) {
    fadeOut(p1);
    $("#choose-avatar-heading").css("animation", "opac2 .5s");
    $("#choose-avatar-heading").css("opacity", ".4");
    setTimeout(function () {
      $(p1).css("grid-row", "2");
      $(p1).css("grid-column", "4 / 6");
      if (countFlag === 2) {
        $("#attack-button").css("display", "block");
      }
      fadeIn(p1);
      fadeIn("#attack-button");
      fadeIn("#versus");
      fadeIn("#defender-label");
      fadeIn("#howard-cosell-two");
    }, 1200);
    defenderFlag = false;
    $("#attack-button").attr("disabled", false);
  }


  // CHOOSE AVATARS
  $("#player-one").on("click", function () {
    if (countFlag > 0 && playerOneFlag && defenderFlag) {
      chooseDefender("#avatar-one");
      playerTwo = vader;
      currentTwoHealth = playerTwo.healthPoints;
      playerOneFlag = false;
    } else if (playerOneFlag && defenderFlag) {
      choosePlayerOne("#avatar-one", "#avatar-two", "#avatar-three", "#avatar-four");
      playerOne = vader;
      currentOneHealth = playerOne.healthPoints;
      playerOneFlag = false;
      document.getElementById(songs[2]).play();
    }
    countFlag++;
  });

  $("#player-two").on("click", function () {
    if (countFlag > 0 && playerTwoFlag && defenderFlag) {
      chooseDefender("#avatar-two");
      playerTwo = obiwan;
      currentTwoHealth = playerTwo.healthPoints;
      playerTwoFlag = false;
    } else if (playerTwoFlag && defenderFlag) {
      choosePlayerOne("#avatar-two", "#avatar-one", "#avatar-three", "#avatar-four");
      playerOne = obiwan;
      currentOneHealth = playerOne.healthPoints;
      playerTwoFlag = false;
      document.getElementById(songs[3]).play();
    }
    countFlag++;
  });

  $("#player-three").on("click", function () {
    if (countFlag > 0 && playerThreeFlag && defenderFlag) {
      chooseDefender("#avatar-three");
      playerTwo = luke;
      currentTwoHealth = playerTwo.healthPoints;
      playerThreeFlag = false;
    } else if (playerThreeFlag && defenderFlag) {
      choosePlayerOne("#avatar-three", "#avatar-one", "#avatar-two", "#avatar-four");
      playerOne = luke;
      currentOneHealth = playerOne.healthPoints;
      playerThreeFlag = false;
      document.getElementById(songs[0]).play();
    }
    countFlag++;
  });

  $("#player-four").on("click", function () {
    if (countFlag > 0 && playerFourFlag && defenderFlag) {
      chooseDefender("#avatar-four");
      playerTwo = porg;
      currentTwoHealth = playerTwo.healthPoints;
      playerFourFlag = false;
    } else if (playerFourFlag && defenderFlag) {
      choosePlayerOne("#avatar-four", "#avatar-one", "#avatar-two", "#avatar-three");
      playerOne = porg;
      currentOneHealth = playerOne.healthPoints;
      playerFourFlag = false;
      document.getElementById(songs[1]).play();
    }
    countFlag++;
  });

  var playerOne;
  var playerTwo;
  var undefeatedEnemies = 3
  var attacks = 0;
  var currentOneHealth;
  var currentTwoHealth;

  function checkOneHealth() {
    if (currentOneHealth <= 0) {
      $("#" + playerOne.healthId).text("Health: 0");
      $("#" + playerTwo.healthId).text("Health: " + currentTwoHealth);
      $("#howard-cosell").text("You have been defeated. GAME OVER!");
      $("#howard-cosell-two").text("");
      $("#attack-button").attr("disabled", true);
      $("#attack-button").css("animation", "fadeout .8s");
      $("#attack-button").css("opacity", "0");
      $("#choose-avatar-heading").css("animation", "fadeout2 .8s");
      $("#choose-avatar-heading").css("opacity", "0");
      fadeOut("#" + playerOne.divId);
      fadeOut("#your-character-label");
      fadeOut("#versus");
      setTimeout(function () {
        $("#" + playerOne.divId).css("grid-area", playerOne.defeatLocation);
        $("#" + playerOne.divId + " img").css("border", "6px solid #000");
        $("#" + playerOne.divId + " img").css("box-shadow", "0 0 30px #029aff");
        fadeInDead("#" + playerOne.divId);
        fadeIn("#graveyard-label");
        $("#reset-button").css("display", "block");
        $("#reset-button").css("animation", "fadein4 1.4s");
        $("#reset-button").css("opacity", ".9");
      }, 2000);
    }
    else {
      $("#" + playerOne.healthId).text("Health: " + currentOneHealth);
      $("#howard-cosell-two").text(playerTwo.name +
        " attacked you back for " +
        playerTwo.counterAttackPower +
        " damage."
      );
    }
  }

  function checkTwoHealth() {
    if (currentTwoHealth <= 0) {
      $("#" + playerTwo.healthId).text("Health: 0");
      $("#" + playerOne.healthId).text("Health: " + currentOneHealth);
      if (undefeatedEnemies === 2) {
        fadeIn("#graveyard-label");
      }
      undefeatedEnemies--;
      fadeOut("#howard-cosell-two");
      setTimeout(function () {
        $("#howard-cosell-two").text("");
      });
      if (currentTwoHealth <= 0 && undefeatedEnemies === 0) {
        $("#choose-avatar-heading").css("animation", "fadeout2 1.2s");
        $("#choose-avatar-heading").css("opacity", "0");
        fadeOut("#versus");
        $("#howard-cosell").text("YOU WIN!");
        $("#attack-button").attr("disabled", true);
        $("#" + playerTwo.divId).css("animation", "fadeout 2s");
        $("#" + playerTwo.divId).css("opacity", "0");
        fadeOut("#attack-button");
        fadeOut("#defender-label");
        setTimeout(function () {
          $("#" + playerTwo.divId).css("grid-area", playerTwo.defeatLocation);
          $("#" + playerTwo.divId + " img").css("border", "6px solid #000");
          $("#" + playerTwo.divId + " img").css("box-shadow", "0 0 30px #029aff");
          fadeInDead("#" + playerTwo.divId);
          fadeIn("#play-again-button");
          $("#play-again-button").css("display", "block");
          defenderFlag = true;
        }, 2000);
      }
      else {
        $("#attack-button").attr("disabled", true);
        $("#" + playerTwo.divId).css("animation", "fadeout 2s");
        $("#" + playerTwo.divId).css("opacity", "0");
        setTimeout(function () {
          $("#choose-avatar-heading").text("Choose Next Defender");
          $("#choose-avatar-heading").css("opacity", "1");
          $("#choose-avatar-heading").css("animation", "opac .8s");
          $("#choose-avatar-heading").css("animation-iteration-count", "infinite");
          defenderFlag = true;
        }, 3000);
        setTimeout(function () {
          $("#choose-avatar-heading").css("animation", "fadeout2 .8s");
          $("#choose-avatar-heading").css("opacity", "0");
          $("#" + playerTwo.divId).css("grid-area", playerTwo.defeatLocation);
          $("#" + playerTwo.divId + " img").css("border", "6px solid #000");
          $("#" + playerTwo.divId + " img").css("box-shadow", "0 0 30px #029aff");
          fadeInDead("#" + playerTwo.divId);
          fadeIn("#graveyard-label");
        }, 2000);
      }
    }
    else {
      $("#" + playerTwo.healthId).text("Health: " + currentTwoHealth);
      currentOneHealth -= playerTwo.counterAttackPower;
      $("#howard-cosell").text("You attacked " +
        playerTwo.name +
        " for " + currentOneAttackPower +
        " damage."
      );
    }
  }

  // ATTACK BUTTON
  $("#attack-button").on("click", function () {
    if (attacks > 0) {
      currentOneAttackPower += playerOne.attackPower;
    } else {
      currentOneAttackPower = playerOne.attackPower;
    }
    currentTwoHealth -= currentOneAttackPower;
    checkTwoHealth();
    checkOneHealth();
    attacks++;
  });

  $("#reset-button").on("click", function () {
    window.location.reload();
  })

  $("#play-again-button").on("click", function () {
    window.location.reload();
  })