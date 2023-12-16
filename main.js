var turn = "X";
var title = document.getElementById('title');
var win = [];

function game(id) {
    var element = document.getElementById(id);
    if (turn === "X" && !element.innerHTML) {
        element.innerHTML = "X";
        turn = "O"
        title.innerHTML = 'O turn...'
    } else if (turn == "O" && element.innerHTML === '') {
        element.innerHTML = "O";
        turn = "X"
        title.innerHTML = 'X turn...'
    }
    winner()
}

function checkWinner(num1, num2, num3) {
    if (win[num1] == win[num2] && win[num2] == win[num3] && win[num3] != '') {
        title.innerHTML = win[num1] + ' are win';
        document.getElementById(`card${num1 + 1}`).style.background = 'red';
        document.getElementById(`card${num2 + 1}`).style.background = 'red';
        document.getElementById(`card${num3 + 1}`).style.background = 'red';
        for (i = 0; i < 9; i++) {
            document.getElementById(`card${i + 1}`).removeAttribute('onclick');
        }
        setTimeout(()=>{ window.location.reload()},3000)
       
    
        
    }
}
function winner() {
    
    for (i = 0; i < 9; i++) {
        win[i] = document.getElementById(`card${i + 1}`).innerHTML;
    }

    checkWinner(0,1,2);
    checkWinner(3,4,5);
    checkWinner(6,7,8);

    checkWinner(0,3,6);    
    checkWinner(1,4,7);
    checkWinner(2,5,8);

    checkWinner(0,4,8);
    checkWinner(2,4,6);
}