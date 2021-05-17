//first_task
var clicked = false;

var queen = {
    image: '<i class="fas fa-chess-queen"></i>'
}

var king = {
    image: '<i class="fas fa-chess-king"></i>'
}

var bishop = {
    image: '<i class="fas fa-chess-bishop"></i>'
}

var knight = {
    image: '<i class="fas fa-chess-knight"></i>'
}

var rook = {
    image: '<i class="fas fa-chess-rook"></i>'
}

var pawn = {
    image: '<i class="fas fa-chess-pawn"></i>'
}

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var board = [
    [rook.image, knight.image, bishop.image, queen.image, king.image, bishop.image, knight.image, rook.image],
    [pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, pawn.image],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    [pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, pawn.image, '2'],
    [rook.image, knight.image, bishop.image, queen.image, king.image, bishop.image, knight.image, rook.image]
]


function drawBoard() {
    if (!clicked) {
        var gameBoard = document.querySelector('.gameboard');
        var letter = document.querySelectorAll('.letters');
        var number = document.querySelectorAll('.numbers');
        var cell;

        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < numbers.length; i++) {

                cell = document.createElement('div');
                cell.className = 'cell'
                cell.innerHTML = numbers[i];
                number[j].appendChild(cell);
            }

            for (var i = 0; i < numbers.length; i++) {

                cell = document.createElement('div');
                cell.className = 'cell'
                cell.innerHTML = letters[i];
                letter[j].appendChild(cell);
            }
        }

        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[0].length; j++) {
                cell = document.createElement('div');
                if ((i + j) % 2 == 0) {
                    cell.className = 'cell dg';
                }
                else cell.className = 'cell lg';

                if (i == 0 || i == 1) {
                    cell.classList.add('white');
                }

                cell.innerHTML = board[i][j];

                gameBoard.appendChild(cell);
            }
        }
    }
    clicked = true;
}

function delBoard() {
    if (!clicked) {
        var gameBoard = document.querySelector('.gameboard');
        var cell;
        gameBoard.innerHTML = "<h2 class = \"sad\" >Ну и ладно</h2>"
    }
    clicked = true;
}

document.getElementById('answer_yes').onclick = drawBoard;

document.getElementById('answer_no').onclick = delBoard;