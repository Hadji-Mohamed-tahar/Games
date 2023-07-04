//رسم لوحة اللعبة
let arrayGame = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";
let GameOver=false;
let board = document.querySelectorAll(".cell");
let sta=document.querySelector('#status');

//دالة التعيين بالنسبة للمصفوفة
function placePlayerOnarryGame(row, col) {
  if (arrayGame[row][col] == "" && GameOver==false) {
    arrayGame[row][col] = currentPlayer;
    placePlayerOnboard(row, col);
    winner();
    // console.log(arrayGame[row][col]);
  }
  
  //currentPlayer = currentPlayer === "X" ? "O" : "X"; // تغيير اللاعب الحالي
}

//دالة التعيين بالنسبة لواجهة المستخدم
function placePlayerOnboard(row, col) {
  board.forEach((e) => {
    if (
      e.dataset.row == row &&
      e.dataset.col == col &&
      e.textContent != "X" &&
      e.textContent != "O"
    ) {
      e.textContent = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}
//دالة تعيين الفائز
function winner() {
  if (
    (arrayGame[0][0] == "X" &&arrayGame[0][1] == "X" &&arrayGame[0][2] == "X")||
    (arrayGame[1][0] == "X" &&arrayGame[1][1] == "X" &&arrayGame[1][2] == "X")||
    (arrayGame[2][0] == "X" &&arrayGame[2][1] == "X" &&arrayGame[2][2] == "X")||

    (arrayGame[0][0] == "X" &&arrayGame[1][0] == "X" &&arrayGame[2][0] == "X")||
    (arrayGame[0][1] == "X" &&arrayGame[1][1] == "X" &&arrayGame[2][1] == "X")||
    (arrayGame[0][2] == "X" &&arrayGame[1][2] == "X" &&arrayGame[2][2] == "X")||

    (arrayGame[0][0] == "X" &&arrayGame[1][1] == "X" &&arrayGame[2][2] == "X")||
    (arrayGame[0][2] == "X" &&arrayGame[1][1] == "X" &&arrayGame[2][0] == "X")
     ){
       sta.textContent="xفاز "
       return GameOver=true;
      }else if(
        (arrayGame[0][0] == "O" &&arrayGame[0][1] == "O" &&arrayGame[0][2] == "O")||
        (arrayGame[1][0] == "O" &&arrayGame[1][1] == "O" &&arrayGame[1][2] == "O")||
        (arrayGame[2][0] == "O" &&arrayGame[2][1] == "O" &&arrayGame[2][2] == "O")||

        (arrayGame[0][0] == "O" &&arrayGame[1][0] == "O" &&arrayGame[2][0] == "O")||
        (arrayGame[0][1] == "O" &&arrayGame[1][1] == "O" &&arrayGame[2][1] == "O")||
        (arrayGame[0][2] == "O" &&arrayGame[1][2] == "O" &&arrayGame[2][2] == "O")||

        (arrayGame[0][0] == "O" &&arrayGame[1][1] == "O" &&arrayGame[2][2] == "O")||
        (arrayGame[0][2] == "O" &&arrayGame[1][1] == "O" &&arrayGame[2][0] == "O")
      ){
        sta.textContent="Oفاز "
       return GameOver=true;
      }
     

// التحقق من حالة التعادل
let isDraw = true;
arrayGame.forEach((row) => {
  if (row.includes("")) {
    isDraw = false; // إذا وجدت خلية فارغة، فليس تعادلاً
  }
});

if (isDraw) {
  sta.textContent = "تعادل"; // إعلان التعادل
  GameOver = true;
}

   

}
//دالة اعادة اللعب
function replayGame() {
  arrayGame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  GameOver = false;
  sta.textContent = ''; // إعادة تهيئة نص الفائز
  // currentPlayer = "X";
  board.forEach((e) => {
    e.textContent = "";
  });
}
