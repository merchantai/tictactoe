// Initileze variables

var count = [];
var i;
var p1Score = 0, p2Score = 0;
var p1, p2;
var currPlay = "p1";
var p1Arr = [[],[],[],[],[],[],[],[]];
var p2Arr = [[],[],[],[],[],[],[],[]];
var win = [[1,2,3], [4,5,6], [7,8,9],
           [1,4,7], [2,5,8], [3,6,9],
           [1,5,9], [3,5,7]];
// Marker Select

$("#X").on("click",function(){
  p1 = "X";
  p2 = "O";
  $(".marker").fadeOut();
  $("button").html("-");
  $(".game").delay(500).fadeIn("slow");
  $("#play1").fadeIn("slow");
  $("#play2").fadeOut();
}); 
 
$("#O").on("click",function(){
  p2 = "X";
  p1 = "O";
  $(".marker").fadeOut();
  $("button").html("-");
  $(".game").delay(500).fadeIn("slow");
  $("#play1").fadeIn("slow");
}); 

// Player Change

function changePlayer(){
  if(currPlay === "p1"){
    currPlay = "p2";
    $("#play1").fadeOut();
    $("#play2").delay(400).fadeIn("slow");
    
  }else{
    currPlay = "p1";
    $("#play2").fadeOut();
    $("#play1").delay(400).fadeIn("slow");
    
  }
}

//Check Status

function checkGame(){
  
  if(p1Arr[0].length === 3 || p1Arr[1].length === 3 || p1Arr[2].length === 3 || p1Arr[3].length === 3 || p1Arr[4].length === 3 || p1Arr[5].length === 3 || p1Arr[6].length === 3 || p1Arr[7].length === 3  ){
          gameOver();
        }else if(p2Arr[0].length === 3 || p2Arr[1].length === 3 || p2Arr[2].length === 3 || p2Arr[3].length === 3 || p2Arr[4].length === 3 || p2Arr[5].length === 3 || p2Arr[6].length === 3 || p2Arr[7].length === 3 ){
          gameOver();
        }else if(count.length===9){
    // game drawn
    $("#play2").fadeOut();
    $("#play1").fadeOut();
    $("#draw").delay(400).fadeIn("slow").html("Match Draw");
    $("#reset").html("Reset Game").delay(400).fadeIn("slow");
  }else{
   changePlayer();
  }
} 
 
// Game Over

function gameOver(){
  if(currPlay==="p1"){
    $("#play1").fadeOut();
    $("#win").delay(400).fadeIn("slow").html("Player 1 Wins");
    ++p1Score;
  }else{
    $("#play2").fadeOut();
    $("#win").delay(400).fadeIn("slow").html("Player 2 Wins");
    ++p2Score;
  }
  $("#reset").html("Reset Game").delay(400).fadeIn("slow");
    $(".bt").attr("disabled",true);
}

//Buttons click 

$("#1").on("click", function(){
  count.push(1);
  $("#1").attr("disabled",true);
    if(currPlay === "p1"){
    $("#1").html(p1);
      p1Add(1);
    }else{
      $("#1").html(p2);
      p2Add(1);
  }
  checkGame();
});


$("#2").on("click", function(){
  count.push(2);
  $("#2").attr("disabled",true);
    if(currPlay === "p1"){
    $("#2").html(p1);
      p1Add(2);
  }else{
    $("#2").html(p2);
      p2Add(2);
  }
  checkGame();
});


$("#3").on("click", function(){
  count.push(3);
  $("#3").attr("disabled",true);
    if(currPlay === "p1"){
    $("#3").html(p1);
      p1Add(3);
  }else{
    $("#3").html(p2);
      p2Add(3);
  }
  checkGame();
});
 

$("#4").on("click", function(){
  count.push(4);
  $("#4").attr("disabled",true);
    if(currPlay === "p1"){
    $("#4").html(p1);
      p1Add(4);
  }else{
    $("#4").html(p2);
      p2Add(4);
  }
  checkGame();
});


$("#5").on("click", function(){
  count.push(5);
  $("#5").attr("disabled",true);
    if(currPlay === "p1"){
    $("#5").html(p1);
      p1Add(5);
  }else{
    $("#5").html(p2);
      p2Add(5);
  }
  checkGame();
});


$("#6").on("click", function(){
  count.push(6);
  $("#6").attr("disabled",true);
    if(currPlay === "p1"){
    $("#6").html(p1);
      p1Add(6);
  }else{
    $("#6").html(p2);
      p2Add(6);
  }
  checkGame();
});



$("#7").on("click", function(){
  count.push(7);
  $("#7").attr("disabled",true);
    if(currPlay === "p1"){
    $("#7").html(p1);
      p1Add(7);
  }else{
    $("#7").html(p2);
      p2Add(7);
  }
  checkGame();
});


$("#8").on("click", function(){
  count.push(8);
  $("#8").attr("disabled",true);
    if(currPlay === "p1"){
    $("#8").html(p1);
      p1Add(8);
  }else{
    $("#8").html(p2);
      p2Add(8);
  }
  checkGame();
});


$("#9").on("click", function(){
  count.push(9);
  $("#9").attr("disabled",true);
    if(currPlay === "p1"){
    $("#9").html(p1);
      p1Add(9);
  }else{
    $("#9").html(p2);
      p2Add(9);
  }
  checkGame();
});

//Reset

$("#reset").on("click",function(){
  $(".bt").attr("disabled",false).html("-");
  p1Arr = [[],[],[],[],[],[],[],[]];
  p2Arr = [[],[],[],[],[],[],[],[]];
  $("#win").fadeOut();
  $("#draw").fadeOut();
  count = [];
  changePlayer();
});

//Player 1 add
function p1Add(val){
  switch(val){
    case 1:
      p1Arr[0].push(1);
      p1Arr[3].push(1);
      p1Arr[6].push(1);
      break;
    case 2:
      p1Arr[0].push(2);
      p1Arr[4].push(2);
      break;
    case 3:
      p1Arr[0].push(3);
      p1Arr[5].push(3);
      p1Arr[7].push(3);
      break;
    case 4:
      p1Arr[1].push(4);
      p1Arr[3].push(4);
      break;
    case 5:
      p1Arr[1].push(5);
      p1Arr[4].push(5);
      p1Arr[6].push(5);
      p1Arr[7].push(5);
      break;
    case 6:
      p1Arr[1].push(6);
      p1Arr[5].push(6);
      break;
    case 7:
      p1Arr[2].push(7);
      p1Arr[3].push(7);
      p1Arr[7].push(7);
      break;
    case 8:
      p1Arr[2].push(8);
      p1Arr[4].push(8);
      break;
    case 9:
      p1Arr[2].push(9);
      p1Arr[5].push(9);
      p1Arr[6].push(9);
  }
}

//Player 2 add

function p2Add(val){
  switch(val){
    case 1:
      p2Arr[0].push(1);
      p2Arr[3].push(1);
      p2Arr[6].push(1);
      break;
    case 2:
      p2Arr[0].push(2);
      p2Arr[4].push(2);
      break;
    case 3:
      p2Arr[0].push(3);
      p2Arr[5].push(3);
      p2Arr[7].push(3);
      break;
    case 4:
      p2Arr[1].push(4);
      p2Arr[3].push(4);
      break;
    case 5:
      p2Arr[1].push(5);
      p2Arr[4].push(5);
      p2Arr[6].push(5);
      p2Arr[7].push(5);
      break;
    case 6:
      p2Arr[1].push(6);
      p2Arr[5].push(6);
      break;
    case 7:
      p2Arr[2].push(7);
      p2Arr[3].push(7);
      p2Arr[7].push(7);
      break;
    case 8:
      p2Arr[2].push(8);
      p2Arr[4].push(8);
      break;
    case 9:
      p2Arr[2].push(9);
      p2Arr[5].push(9);
      p2Arr[6].push(9);
  }
}