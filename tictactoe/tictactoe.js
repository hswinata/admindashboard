const gameBoard = (() => {
    let board = [];
    
    const create = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        const container = document.querySelector('.container');
        const choice = document.querySelector('.choice');
        const gameBoard = document.createElement('div');
        gameBoard.classList.add('gameboard');
        container.insertBefore(gameBoard, choice);
        
        board.forEach((square, index) => {
            let div = document.createElement('div');
            div.innerText = ``;
            gameBoard.append(div);
            div.classList.add('box');
            div.setAttribute('data-index', index);
        });

        displayController.handleClick();
    };

    const createPlayer = (name, mark) => {
        return {
            name,
            mark
        };
    };

    const update = (index, value) => {
        board[index] = value;
    };

    const get = () => board;

    return {
        create,
        createPlayer,
        update,
        get
    };
})();

const displayController = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            gameBoard.createPlayer((document.querySelector('input[id="player1"]').value), "X"),
            gameBoard.createPlayer((document.querySelector('input[id="player2"]').value), "O")
            ];
        currentPlayerIndex = 0;
        gameOver = false;
        gameBoard.create();
        document.querySelector('.gameboard').setAttribute('id', 'X');
    };

    const handleClick = () => {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.addEventListener('click', e => {
                let dataIndex = e.target.getAttribute('data-index');
                let value = players[currentPlayerIndex].mark;
                let board = gameBoard.get();

                if (gameOver == false) {
                    if (gameBoard.get()[dataIndex] !== "") return;

                    if (currentPlayerIndex == 0) {
                        let img = document.createElement('img');
                        img.setAttribute('src', './img/X3.png');
                        box.append(img);
                        document.querySelector('.gameboard').setAttribute('id', 'O');
                        gameBoard.update(dataIndex, value);
                        if (checkWinner(board)) {
                            gameOver = true;
                            document.querySelector('.message').innerText = `${players[currentPlayerIndex]["name"]} wins!`;
                            document.querySelector('.button-rematch').removeAttribute('disabled');
                        };

                        if (checkTie(board)) {
                            gameOver = true;
                            document.querySelector('.message').innerText = `It's a tie!`;
                            document.querySelector('.button-rematch').removeAttribute('disabled');
                        };
                        currentPlayerIndex = 1;

                    } else if (currentPlayerIndex == 1) {
                        let img = document.createElement('img');
                        img.setAttribute('src', './img/O.png');
                        box.append(img);
                        document.querySelector('.gameboard').setAttribute('id', 'X');
                        gameBoard.update(dataIndex, value);
                        if (checkWinner(board)) {
                            gameOver = true;
                            document.querySelector('.message').innerText = `${players[currentPlayerIndex]["name"]} wins!`;
                            document.querySelector('.button-rematch').removeAttribute('disabled');
                        };

                        if(checkTie(board)) {
                            gameOver = true;
                            document.querySelector('.message').innerText = `It's a tie!`
                            document.querySelector('.button-rematch').removeAttribute('disabled');
                        };    
                        currentPlayerIndex = 0;
                    };
                } else if (gameOver == true) return;
            })
        })
};

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if ((board[a] === "X" && board[b] === "X" && board[c] ==="X") || (board[a] === "O" && board[b] === "O" && board[c] ==="O")) {
                return true;
            }
        };
    };

    const checkTie = (board) => {
        if (gameOver == false) {
        return tie = board.every(value => value !== "");
        } else if (gameOver == true) {return false};
    };

    const disableForm = () => {
        document.querySelector('.button-start').setAttribute('disabled', 'disabled');
        let inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.setAttribute('disabled', 'disabled');
        })
    };

    const rematch = () => {
        let gameboard = document.querySelector('.gameboard');
        gameboard.remove();
        document.querySelector('.message').innerText = "";
        start();
    };

    const getPlayers = () => players;
    const getGameOver = () => gameOver;

    return {
        start,
        rematch,
        handleClick,
        disableForm,
        getPlayers,
        getGameOver,
        checkTie
    };
})();

let playerForm = document.getElementById('players');
playerForm.addEventListener('submit', e => {
    e.preventDefault();
    displayController.start();
    displayController.disableForm();
});

let rematchButton = document.querySelector('.button-rematch');
rematchButton.addEventListener('click', e => {
    displayController.rematch();
});