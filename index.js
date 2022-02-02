window.onload = function () {
    app.init();
}

class App {
    winningVariants = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    currentPlayer = "X";

    init() {
        document.querySelectorAll(".cell").forEach(
            cell => cell.addEventListener("click", this.cellClick));
    }
    cellClick = (e) => {
        //console.log(e.target)
        this.playerTurn(e.target)
    }

    playerTurn(el) {
        if (el.innerHTML == "X" || el.innerHTML == "O") return;
        el.innerHTML = this.currentPlayer;

        this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";

        this.checkWinner();
    }

    checkWinner() {

    }
}

const app = new App();
