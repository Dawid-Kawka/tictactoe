window.onload = function () {
    app.init();
}

class App {

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
    }
}

const app = new App();
