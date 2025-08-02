class Piece {
    constructor(x, y, w, h, type = 'secondary') {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
    }

    containsPoint(x, y) {
        return x >= this.x && y >= this.y && 
               x < (this.x + this.w) && y < (this.y + this.h);
    }

    move(direction) {
        switch(direction) {
            case 0: this.y--; break; // up
            case 1: this.x++; break; // right
            case 2: this.y++; break; // down
            case 3: this.x--; break; // left
        }
    }

    toString() {
        return `${this.x} ${this.y} ${this.w} ${this.h}`;
    }
}

class Board {
    constructor() {
        this.pieces = [];
        this.selected = null;
        this.height = 5;
        this.width = 4;
        this.moves = 0;
        this.configuration = 1;
        this.hasWon = false;
        this.reset();
    }

    reset() {
        this.pieces = [];
        if (this.configuration === 1) {
            this.pieces.push(new Piece(1, 0, 2, 2, 'main'));
            this.pieces.push(new Piece(0, 0, 1, 2, 'secondary'));
            this.pieces.push(new Piece(3, 0, 1, 2, 'secondary'));
            this.pieces.push(new Piece(0, 2, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 2, 1, 1, 'small'));
            this.pieces.push(new Piece(2, 2, 1, 1, 'small'));
            this.pieces.push(new Piece(3, 2, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(2, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(1, 4, 2, 1, 'small'));
        } else if (this.configuration === 2) {
            this.pieces.push(new Piece(1, 0, 2, 2, 'main'));
            this.pieces.push(new Piece(0, 0, 1, 1, 'small'));
            this.pieces.push(new Piece(3, 0, 1, 1, 'small'));
            this.pieces.push(new Piece(0, 1, 1, 2, 'secondary'));
            this.pieces.push(new Piece(3, 1, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 2, 1, 2, 'secondary'));
            this.pieces.push(new Piece(0, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(3, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(0, 4, 2, 1, 'small'));
            this.pieces.push(new Piece(2, 4, 2, 1, 'small'));
        } else if (this.configuration === 3) {
            this.pieces.push(new Piece(2, 1, 2, 2, 'main'));
            this.pieces.push(new Piece(0, 0, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 0, 1, 1, 'small'));
            this.pieces.push(new Piece(2, 0, 1, 1, 'small'));
            this.pieces.push(new Piece(3, 0, 1, 1, 'small'));
            this.pieces.push(new Piece(1, 1, 1, 2, 'secondary'));
            this.pieces.push(new Piece(0, 2, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 3, 2, 1, 'small'));
            this.pieces.push(new Piece(3, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(2, 4, 2, 1, 'small'));
        } else if (this.configuration === 4) {
            this.pieces.push(new Piece(1, 0, 2, 2, 'main'));
            this.pieces.push(new Piece(0, 0, 1, 2, 'secondary'));
            this.pieces.push(new Piece(3, 0, 1, 2, 'secondary'));
            this.pieces.push(new Piece(0, 2, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 2, 2, 1, 'small'));
            this.pieces.push(new Piece(3, 2, 1, 2, 'secondary'));
            this.pieces.push(new Piece(1, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(2, 3, 1, 1, 'small'));
            this.pieces.push(new Piece(0, 4, 1, 1, 'small'));
            this.pieces.push(new Piece(3, 4, 1, 1, 'small'));
        }
        
        this.moves = 0;
        this.selected = null;
        this.hasWon = false;
    }

    selectPiece(x, y) {
        for (let piece of this.pieces) {
            if (piece.containsPoint(x, y)) {
                this.selected = piece;
                return true;
            }
        }
        this.selected = null;
        return false;
    }

    isOccupied(x, y) {
        for (let piece of this.pieces) {
            if (piece.containsPoint(x, y)) {
                return true;
            }
        }
        return false;
    }

    movePiece(direction) {
        if (!this.selected) return false;

        // Check for win condition
        if (this.selected === this.pieces[0] && 
            this.selected.x === 1 && 
            this.selected.y === 3 && 
            direction === 2) {
            this.hasWon = true;
            this.selected.move(direction);
            this.moves++;
            return true;
        }

        let canMove = true;
        let newX = this.selected.x;
        let newY = this.selected.y;

        switch(direction) {
            case 0: // up
                if (newY === 0) return false;
                newY--;
                for (let i = newX; i < newX + this.selected.w; i++) {
                    if (this.isOccupied(i, newY)) {
                        canMove = false;
                        break;
                    }
                }
                break;
            case 1: // right
                if (newX + this.selected.w === this.width) return false;
                newX++;
                for (let i = newY; i < newY + this.selected.h; i++) {
                    if (this.isOccupied(newX + this.selected.w - 1, i)) {
                        canMove = false;
                        break;
                    }
                }
                break;
            case 2: // down
                if (newY + this.selected.h === this.height) return false;
                newY++;
                for (let i = newX; i < newX + this.selected.w; i++) {
                    if (this.isOccupied(i, newY + this.selected.h - 1)) {
                        canMove = false;
                        break;
                    }
                }
                break;
            case 3: // left
                if (newX === 0) return false;
                newX--;
                for (let i = newY; i < newY + this.selected.h; i++) {
                    if (this.isOccupied(newX, i)) {
                        canMove = false;
                        break;
                    }
                }
                break;
        }

        if (canMove) {
            this.selected.move(direction);
            this.moves++;
            return true;
        }
        return false;
    }

    setConfig(config) {
        this.configuration = config;
        this.reset();
    }

    toString() {
        let result = this.moves + '\n';
        for (let piece of this.pieces) {
            result += piece.toString() + '\n';
        }
        return result;
    }

    fromString(str) {
        const lines = str.trim().split('\n');
        this.moves = parseInt(lines[0]);
        this.pieces = [];
        for (let i = 1; i < lines.length; i++) {
            const [x, y, w, h] = lines[i].split(' ').map(Number);
            this.pieces.push(new Piece(x, y, w, h));
        }
        this.selected = null;
        this.hasWon = false;
    }
}

let board = new Board();
let isDragging = false;
let dragStartX, dragStartY;
let hasMoved = false; // Prevent multiple moves from single drag

function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    // Create grid cells
    for (let y = 0; y < board.height; y++) {
        for (let x = 0; x < board.width; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.gridColumn = x + 1;
            cell.style.gridRow = y + 1;
            boardElement.appendChild(cell);
        }
    }

    // Render pieces
    board.pieces.forEach((piece, index) => {
        const pieceElement = document.createElement('div');
        pieceElement.className = `piece ${piece.type}`;
        pieceElement.style.left = `${piece.x * 25}%`;
        pieceElement.style.top = `${piece.y * 20}%`;
        pieceElement.style.width = `${piece.w * 25}%`;
        pieceElement.style.height = `${piece.h * 20}%`;
                        pieceElement.textContent = ''; // Set to empty to remove number display

        if (board.selected === piece) {
            pieceElement.classList.add('selected');
        }

        // Direct drag functionality - no need to select first
        pieceElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            hasMoved = false; // Reset move flag
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            // Automatically select the piece being dragged
            board.selectPiece(piece.x, piece.y);
            renderBoard();
        });

        // Touch support for mobile devices
        pieceElement.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isDragging = true;
            hasMoved = false;
            const touch = e.touches[0];
            dragStartX = touch.clientX;
            dragStartY = touch.clientY;
            board.selectPiece(piece.x, piece.y);
            renderBoard();
        });

        // Touch move handling for mobile devices
        pieceElement.addEventListener('touchmove', (e) => {
            if (isDragging && !hasMoved) {
                e.preventDefault();
                e.stopPropagation();
                const touch = e.touches[0];
                const deltaX = touch.clientX - dragStartX;
                const deltaY = touch.clientY - dragStartY;
                
                if (Math.abs(deltaX) > 30 || Math.abs(deltaY) > 30) {
                    let direction = -1;
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        direction = deltaX > 0 ? 1 : 3; // right or left
                    } else {
                        direction = deltaY > 0 ? 2 : 0; // down or up
                    }
                    
                    if (board.movePiece(direction)) {
                        renderBoard();
                        hasMoved = true;
                    }
                    isDragging = false;
                }
            }
        }, { passive: false });

        // Touch end for each piece
        pieceElement.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isDragging = false;
            hasMoved = false;
        });

        boardElement.appendChild(pieceElement);
    });

    // Update info
    document.getElementById('moves').textContent = board.moves;
    document.getElementById('config').textContent = board.configuration;
    document.getElementById('status').textContent = board.hasWon ? 'Completed' : 'Playing';

    if (board.hasWon) {
        showWinMessage();
    }
}

function movePiece(direction) {
    if (board.movePiece(direction)) {
        renderBoard();
    }
}

function resetGame() {
    board.reset();
    renderBoard();
}

function changeConfig() {
    const newConfig = (board.configuration % 4) + 1;
    board.setConfig(newConfig);
    renderBoard();
}

function saveGame() {
    const gameState = board.toString();
    localStorage.setItem('klotski_save', gameState);
    alert('Game saved!');
}

function loadGame() {
    const savedState = localStorage.getItem('klotski_save');
    if (savedState) {
        board.fromString(savedState);
        renderBoard();
        alert('Game loaded!');
    } else {
        alert('No saved game found!');
    }
}

function showWinMessage() {
    document.getElementById('finalMoves').textContent = board.moves;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('winMessage').style.display = 'block';
}

function hideWinMessage() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('winMessage').style.display = 'none';
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        switch(e.key) {
            case 'r':
            case 'R':
                e.preventDefault();
                resetGame();
                break;
            case 's':
            case 'S':
                e.preventDefault();
                saveGame();
                break;
            case 'o':
            case 'O':
                e.preventDefault();
                loadGame();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                e.preventDefault();
                board.setConfig(parseInt(e.key));
                renderBoard();
                break;
        }
    } else {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                movePiece(0);
                break;
            case 'ArrowRight':
                e.preventDefault();
                movePiece(1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                movePiece(2);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                movePiece(3);
                break;
        }
    }
});

// Enhanced mouse drag functionality
document.addEventListener('mousemove', (e) => {
    if (isDragging && board.selected && !hasMoved) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        
        // Increased threshold to prevent accidental moves
        if (Math.abs(deltaX) > 40 || Math.abs(deltaY) > 40) {
            let direction = -1;
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                direction = deltaX > 0 ? 1 : 3; // right or left
            } else {
                direction = deltaY > 0 ? 2 : 0; // down or up
            }
            
            if (board.movePiece(direction)) {
                renderBoard();
                hasMoved = true; // Mark that a move has been made
            }
            // Stop dragging after one move to prevent multiple moves
            isDragging = false;
        }
    }
});



document.addEventListener('mouseup', () => {
    isDragging = false;
    hasMoved = false; // Reset move flag when mouse is released
});



// Initialize the game
renderBoard(); 