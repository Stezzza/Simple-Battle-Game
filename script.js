let player1Health = 100;
let player2Health = 100;
let AImode = false;

function setup() {
  let gameMode = prompt("Select game mode: 'vs AI' or 'vs Player'");
  if (
    gameMode === "vs AI" ||
    gameMode === "AI" ||
    gameMode === "ai" ||
    gameMode === "vs ai" ||
    (gameMode === "vs Ai") | (gameMode === "Ai")
  ) {
    AImode = true;
    document.getElementById("Player2").innerHTML = "AI";
    document.getElementById("player2Attack").disabled = true;
    document.getElementById("player2Attack").style.display = "none";
    document.getElementById("player2Heal").disabled = true;
    document.getElementById("player2Heal").style.display = "none";
    document.getElementById("player2Surrender").disabled = true;
    document.getElementById("player2Surrender").style.display = "none";
  } else if (
    gameMode === "vs Player" ||
    gameMode === "Player" ||
    gameMode === "player" ||
    gameMode === "vs player" ||
    gameMode === "VS Player"
  ) {
    AImode = false;
    document.getElementById("player2Attack").disabled = true;
    document.getElementById("player2Attack").style.display = "none";
    document.getElementById("player2Heal").disabled = true;
    document.getElementById("player2Heal").style.display = "none";
  } else {
    alert("Invalid game mode selected. Please try again.");
    setup();
  }

  document.getElementById("player1Heal").disabled = true;
  document.getElementById("player1Heal").style.display = "none";

  document.getElementById("healthPlayer1").innerHTML = "Health: 100%" + "<br>";
  document.getElementById("healthPlayer2").innerHTML = "Health: 100%" + "<br>";
}

function AI() {
  document.getElementById("thinking").innerHTML = "Thinking...";
  setTimeout(function() {
    document.getElementById("player1Attack").disabled = false;
    document.getElementById("player1Attack").style.display = "block";
    document.getElementById("player1Heal").disabled = false;
    document.getElementById("player1Heal").style.display = "block";

    let attackProbability = Math.random() * 100;
    let healProbability = Math.random() * 100;

    if (attackProbability > healProbability) {
      player2Attack();
    } else {
      player2Heal();
    }

    document.getElementById("thinking").innerHTML = "";
  }, 1500);
}

function player1Attack() {
  const messages = [
    "Player 1 throws a keyboard at the opponent!",
    "Player 1 unleashes an army of code monkeys!",
    "Player 1 summons the power of 'undefined'!",
    "Player 1 casts a spell of 'unhandled exception'!",
    "Player 1 hits the opponent with a 'syntax terror'!",
    "Player 1 unleashes a horde of killer robots from the code!",
    "Player 1 confuses the opponent with a 'race car' attack!",
    "Player 1 blows the opponent's mind with 'quantum computing'!",
    "Player 1 unleashes a swarm of 'recursive kittens'!",
    "Player 1 hits the opponent with a 'blue screen of death'!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  document.getElementById("outputBox").innerHTML += message + "<br>";
  document.getElementById("player1Attack").disabled = true;
  document.getElementById("player1Attack").style.display = "none";
  document.getElementById("player1Heal").disabled = true;
  document.getElementById("player1Heal").style.display = "none";
  document.getElementById("player2Attack").disabled = false;
  document.getElementById("player2Attack").style.display = "block";
  document.getElementById("player2Heal").disabled = false;
  document.getElementById("player2Heal").style.display = "block";

  let damage = Math.round(Math.random() * 40);
  player2Health -= damage;
  document.getElementById("healthPlayer2").innerHTML =
    "Health: " + player2Health + "%" + "<br>";

  if (player2Health <= 0) {
    gameOver();
  }

  if (AImode == true) {
    document.getElementById("player2Attack").disabled = true;
    document.getElementById("player2Attack").style.display = "none";
    document.getElementById("player2Heal").disabled = true;
    document.getElementById("player2Heal").style.display = "none";
    document.getElementById("player2Surrender").disabled = true;
    document.getElementById("player2Surrender").style.display = "none";
    AI();
  } else {
    document.getElementById("player2Attack").disabled = false;
    document.getElementById("player2Attack").style.display = "block";
    document.getElementById("player2Surrender").disabled = false;
    document.getElementById("player2Surrender").style.display = "block";
    console.log("vs Player");
    if (player2Health <= 100) {
      document.getElementById("player2Heal").disabled = false;
      document.getElementById("player2Heal").style.display = "block";
    } else {
      document.getElementById("player2Heal").disabled = true;
      document.getElementById("player2Heal").style.display = "none";
    }
    if (player2Health <= 0) {
      document.getElementById("player2Attack").disabled = true;
      document.getElementById("player2Attack").style.display = "none";
      document.getElementById("player2Heal").disabled = true;
      document.getElementById("player2Heal").style.display = "none";
      document.getElementById("player2Surrender").disabled = true;
      document.getElementById("player2Surrender").style.display = "none";
    }
  }
}

function player1Heal() {
  const messages = [
    "Player 1 applies a band-aid to the wounds!",
    "Player 1 administers some 'debugging' medicine!",
    "Player 1 uses a 'git revert' to undo the damage!",
    "Player 1 patches up the code with a 'hotfix'!",
    "Player 1 restores the code from a 'backup'!",
    "Player 1 sprinkles some 'magic pixie dust' for a quick recovery!",
    "Player 1 runs a 'garbage collector' to clean up the mess!",
    "Player 1 gives a 'clean build' to restore health!",
    "Player 1 performs a 'merge' to fix the problems!",
    "Player 1 hits the 'undo' button to revert the damage!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  document.getElementById("outputBox").innerHTML += message + "<br>";

  document.getElementById("player1Attack").disabled = true;
  document.getElementById("player1Attack").style.display = "none";
  document.getElementById("player1Heal").disabled = true;
  document.getElementById("player1Heal").style.display = "none";
  document.getElementById("player2Attack").disabled = false;
  document.getElementById("player2Attack").style.display = "block";
  document.getElementById("player2Heal").disabled = false;
  document.getElementById("player2Heal").style.display = "block";
  if (player2Health >= 100) {
    document.getElementById("player2Heal").disabled = true;
    document.getElementById("player2Heal").style.display = "none";
  }

  let heal = Math.round(Math.random() * 40);
  player1Health += heal;
  if (player1Health >= 100) {
    player1Health = 100;
  }
  document.getElementById("healthPlayer1").innerHTML =
    "Health: " + player1Health + "%" + "<br>";
  console.log("Healed");

  if (player1Health > 100) {
    player1Health = 100;
  }

  if (AImode == true) {
    document.getElementById("player2Attack").disabled = true;
    document.getElementById("player2Attack").style.display = "none";
    document.getElementById("player2Heal").disabled = true;
    document.getElementById("player2Heal").style.display = "none";
    document.getElementById("player2Surrender").disabled = true;
    document.getElementById("player2Surrender").style.display = "none";
    AI();
  } else {
    console.log("vs Player");
  }
}

function player2Attack() {
  const messages = [
    "Player 2 summons a horde of 'NullPointerExceptions'!",
    "Player 2 hits the opponent with a 'code refactoring' attack!",
    "Player 2 unleashes a 'SQL injection' on the opponent!",
    "Player 2 casts a spell of 'memory leak'!",
    "Player 2 hits the opponent with a 'stack underflow' attack!",
    "Player 2 unleashes a 'buffer underflow' on the opponent!",
    "Player 2 confuses the opponent with a 'merge conflict' attack!",
    "Player 2 hits the opponent with a 'race condition' attack!",
    "Player 2 unleashes a horde of 'zombie processes'!",
    "Player 2 hits the opponent with a 'fatal exception' attack!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  document.getElementById("outputBox").innerHTML += message + "<br>";
  document.getElementById("player2Attack").disabled = true;
  document.getElementById("player2Attack").style.display = "none";
  document.getElementById("player2Heal").disabled = true;
  document.getElementById("player2Heal").style.display = "none";
  document.getElementById("player1Attack").disabled = false;
  document.getElementById("player1Attack").style.display = "block";
  document.getElementById("player1Heal").disabled = false;
  document.getElementById("player1Heal").style.display = "block";
  let damage = Math.round(Math.random() * 40);
  player1Health -= damage;
  document.getElementById("healthPlayer1").innerHTML =
    "Health: " + player1Health + "%" + "<br>";
  if (player1Health >= 100) {
    document.getElementById("player1Heal").disabled = true;
    document.getElementById("player1Heal").style.display = "none";
  } else {
    document.getElementById("player1Heal").disabled = false;
    document.getElementById("player1Heal").style.display = "block";
  }
  if (player1Health <= 0) {
    gameOver();
  }
}

function player2Heal() {
  const messages = [
    "Player 2 applies some 'rubber duck debugging' to the wounds!",
    "Player 2 administers a 'code review' for a quick fix!",
    "Player 2 uses 'agile methodology' to heal the wounds!",
    "Player 2 patches up the code with a 'patch management system'!",
    "Player 2 restores the code from a 'source control system'!",
    "Player 2 sprinkles some 'TDD' for a quick recovery!",
    "Player 2 runs a 'performance tuning' to optimize the health!",
    "Player 2 gives a 'code refactoring' to heal the problems!",
    "Player 2 performs a 'continuous integration' to fix the issues!",
    "Player 2 hits the 'commit' button to restore the health!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  document.getElementById("outputBox").innerHTML += message + "<br>";

  document.getElementById("player2Attack").disabled = true;
  document.getElementById("player2Attack").style.display = "none";
  document.getElementById("player2Heal").disabled = true;
  document.getElementById("player2Heal").style.display = "none";
  document.getElementById("player1Attack").disabled = false;
  document.getElementById("player1Attack").style.display = "block";
  document.getElementById("player1Heal").disabled = false;
  document.getElementById("player1Heal").style.display = "block";
  if (player1Health >= 100) {
    document.getElementById("player1Heal").disabled = true;
    document.getElementById("player1Heal").style.display = "none";
  } else {
    document.getElementById("player1Heal").disabled = false;
    document.getElementById("player1Heal").style.display = "block";
  }

  let heal = Math.round(Math.random() * 40);
  player2Health += heal;

  if (player2Health > 100) {
    player2Health = 100;
  }
  document.getElementById("healthPlayer2").innerHTML =
    "Health: " + player2Health + "%" + "<br>";
}

function player1Surrender() {
  document.getElementById("outputBox").innerHTML = "Player 2 Wins!<br>";
  player1Health = 0;
  gameOver();
}

function player2Surrender() {
  document.getElementById("outputBox").innerHTML = "Player 1 Wins!<br>";
  player2Health = 0;
  document.getElementById("player2Attack").disabled = true;
  document.getElementById("player2Heal").disabled = true;
  gameOver();
}

function restart() {
  player1Health = 100;
  player2Health = 100;
  document.getElementById("healthPlayer1").innerHTML = "Health: 100%" + "<br>";
  document.getElementById("healthPlayer2").innerHTML = "Health: 100%" + "<br>";
  document.getElementById("outputBox").innerHTML = "";
  document.getElementById("player2Attack").disabled = true;
  document.getElementById("player2Attack").style.display = "none";
  document.getElementById("player2Heal").disabled = true;
  document.getElementById("player2Heal").style.display = "none";
  document.getElementById("player1Attack").disabled = false;
  document.getElementById("player1Attack").style.display = "block";
  document.getElementById("player1Heal").disabled = true;
  document.getElementById("player1Heal").style.display = "none";
  document.getElementById("player1Surrender").disabled = false;
  document.getElementById("player1Surrender").style.display = "block";
  document.getElementById("player2Surrender").disabled = false;
  document.getElementById("player2Surrender").style.display = "block";
  document.getElementById("outputBox").innerHTML = "Game Restarted!<br>";
  setup();
}
function gameOver() {
  if (AImode == true) {
    if (player1Health <= 0) {
      document.getElementById("outputBox").innerHTML = "AI Supremacy!<br>";
      AI = function() { };
    } else
      document.getElementById("outputBox").innerHTML = "You can keep your job!<br>";
    AI = function() { };
  }
  if (player1Health <= 0) {
    document.getElementById("outputBox").innerHTML = "Player 2 Wins!<br>";
  } else {
    document.getElementById("outputBox").innerHTML = "Player 1 Wins!<br>";
  }
  document.getElementById("player2Attack").disabled = true;
  document.getElementById("player2Attack").style.display = "none";
  document.getElementById("player2Heal").disabled = true;
  document.getElementById("player2Heal").style.display = "none";
  document.getElementById("player2Surrender").disabled = true;
  document.getElementById("player2Surrender").style.display = "none";
  document.getElementById("player1Attack").disabled = true;
  document.getElementById("player1Attack").style.display = "none";
  document.getElementById("player1Heal").disabled = true;
  document.getElementById("player1Heal").style.display = "none";
  document.getElementById("player1Surrender").disabled = true;
  document.getElementById("player1Surrender").style.display = "none";
  AImode = false;
}