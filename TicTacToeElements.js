const X_PIECE = 2;
const O_PIECE = 3;
const BLANK = 4;
var x_Turn = true;
var x_Wins = 0;
var o_Wins = 0;
var board = [[BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK]];

var coords = {
    s1: [0, 0],
    s2: [0, 1],
    s3: [0, 2],
    s4: [1, 0],
    s5: [1, 1],
    s6: [1, 2],
    s7: [2, 0],
    s8: [2, 1],
    s9: [2, 2]
};

//This function is practically the game loop
function onClick(id) {
    if (board[coords[id][0]][coords[id][1]] == BLANK) {
        //If x turn
        if (x_Turn) {
            board[coords[id][0]][coords[id][1]] = X_PIECE;
            document.getElementById(id).innerHTML = "X";
            checkTie();
            checkWin(X_PIECE);
            //Else if o turn
        } else {
            board[coords[id][0]][coords[id][1]] = O_PIECE;
            document.getElementById(id).innerHTML = "O";
            checkTie();
            checkWin(O_PIECE);
        }
        x_Turn = !x_Turn;
        document.getElementById("turn_Display").innerHTML = x_Turn ? "X" : "O";
    }
}

//No iteration allowed!
function checkWin(s_Piece) {
    var isWin = false;
    //Top row
    if (board[0][0] == s_Piece && board[0][1] == s_Piece && board[0][2] == s_Piece) {
        console.log("top row win!");
        isWin = true;
    }
    //Middle row
    else if (board[1][0] == s_Piece && board[1][1] == s_Piece && board[1][2] == s_Piece) {
        isWin = true;
    }
    //Bottom row

    else if (board[2][0] == s_Piece && board[2][1] == s_Piece && board[2][2] == s_Piece) {
        isWin = true;
    }
    //Left column

    else if (board[0][0] == s_Piece && board[1][0] == s_Piece && board[2][0] == s_Piece) {
        isWin = true;
    }
    //Middle column

    else if (board[0][1] == s_Piece && board[1][1] == s_Piece && board[2][1] == s_Piece) {
        isWin = true;
    }
    //Right column

    else if (board[0][2] == s_Piece && board[1][2] == s_Piece && board[2][2] == s_Piece) {
        isWin = true;
    }
    //Top left -> bottom right diagonal

    else if (board[0][0] == s_Piece && board[1][1] == s_Piece && board[2][2] == s_Piece) {
        isWin = true;
    }
    //Top right -> bottom left diagonal
    else if (board[0][2] == s_Piece && board[1][1] == s_Piece && board[2][0] == s_Piece) {
        isWin = true;
    }
    if (isWin) {
        document.getElementById("toast").innerHTML = s_Piece == X_PIECE ? "X Wins!" : "O Wins!";
        document.getElementById("play_Again_Button").style.display = "block";
        if (s_Piece == X_PIECE) {
            x_Wins++;
        } else {
            o_Wins++;
        }
        disableAllButtons();
    }
}

function checkTie() {
    var pieces = 0;
    for (var a = 0; a < board.length; ++a) {
        for (var b = 0; b < board[a].length; ++b) {
            if (board[a][b] != BLANK) {
                ++pieces;
            }
        }
    }
    if (pieces == 9) {
        document.getElementById("toast").innerHTML = "It's a tie!";
        document.getElementById("play_Again_Button").style.display = "block";
        disableAllButtons();
    }
}

function disableAllButtons() {
    //OK SET ATTRIBUTE OP
    document.getElementById("s1").setAttribute("onClick", null);
    document.getElementById("s2").setAttribute("onClick", null);
    document.getElementById("s3").setAttribute("onClick", null);
    document.getElementById("s4").setAttribute("onClick", null);
    document.getElementById("s5").setAttribute("onClick", null);
    document.getElementById("s6").setAttribute("onClick", null);
    document.getElementById("s7").setAttribute("onClick", null);
    document.getElementById("s8").setAttribute("onClick", null);
    document.getElementById("s9").setAttribute("onClick", null);
}

function enableAllButtons() {
    document.getElementById("s1").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s2").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s3").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s4").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s5").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s6").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s7").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s8").setAttribute("onClick", "onClick(this.id)");
    document.getElementById("s9").setAttribute("onClick", "onClick(this.id)");
}

function resetHtmlDisplay() {
    document.getElementById("s1").innerHTML = "<br>";
    document.getElementById("s2").innerHTML = "<br>";
    document.getElementById("s3").innerHTML = "<br>";
    document.getElementById("s4").innerHTML = "<br>";
    document.getElementById("s5").innerHTML = "<br>";
    document.getElementById("s6").innerHTML = "<br>";
    document.getElementById("s7").innerHTML = "<br>";
    document.getElementById("s8").innerHTML = "<br>";
    document.getElementById("s9").innerHTML = "<br>";
}

function reset() {
    for (var a = 0; a < board.length; ++a) {
        for (var b = 0; b < board[a].length; ++b) {
            board[a][b] = BLANK;
        }
    }
    enableAllButtons();
    resetHtmlDisplay();
    document.getElementById("play_Again_Button").style.display = "none";  
    document.getElementById("toast").innerHTML = "no one has won yet";
    document.getElementById("x_Wins_Display").innerHTML = x_Wins;
    document.getElementById("o_Wins_Display").innerHTML = o_Wins;
}
