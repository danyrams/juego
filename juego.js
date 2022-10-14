var options = ["✊", "✌", "🤚"];
var winCounter = 0;
var winCounterNPC = 0;
var matches = [];


function play(option){
    var ncp = Math.floor(Math.random() * 3);
    if (option === option[ncp]){
      document.getElementById("resultado").innerHTML =
      "Empate con " + options[ncp];
    }else if(option === "✊" && options[ncp] === "✌"){
      victoria();
    }else if(option === "✊" && options[ncp] === "🤚") {
      derrota();
    }else if(option === "✌" && options[ncp] === "🤚") {
      victoria();
    }else if(option === "✌" && options[ncp] === "✊") {
      derrota();
    }else if(option === "🤚" && options[ncp] === "✊"){
      victoria();
    }else if(option === "🤚" && options[ncp] === "✌"){
      derrota();
    }
    history(option, options[ncp]);

}

function victoria(){
  let win = "GANASTE";
  winCounter++;
  document.getElementById("resultado").innerHTML = win;
  document.getElementById("victorias").innerHTML = winCounter;
}

function derrota() {
  let lose = "PERDISTE";
  winCounterNPC++;
  document.getElementById("resultado").innerHTML = lose;
  document.getElementById("derrotas").innerHTML = winCounterNPC;

}

function history(player, ncp){
  document.getElementById("historial").innerHTML = "";
  matches.unshift(player + " - " + ncp);
  if(matches.length > 5){
    matches.pop();
  }

  for (const match of matches){
    let node = document.createElement("p");
    node.innerHTML = match;
    document.getElementById("historial").appendChild(node);
   }

  }