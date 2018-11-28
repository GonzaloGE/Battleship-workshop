function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var Board = /** @class */ (function () {
    function Board(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.ship_x = randomIntFromInterval(0, columns - 1);
        this.ship_y = randomIntFromInterval(0, rows - 1);
    }
    Board.prototype.fill_board = function () {
        var b = [];
        for (var i = 0; i < this.rows; i++) {
            b.push([]);
        }
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.columns; j++) {
                b[i].push("O ");
            }
        }
        this.board = b;
        this.shipfloats = true;
    };
    Board.prototype.print_board = function () {
        for (var _i = 0, _a = this.board; _i < _a.length; _i++) {
            var r = _a[_i];
            for (var _b = 0, r_1 = r; _b < r_1.length; _b++) {
                var c = r_1[_b];
                document.write(c);
            }
            document.write("<br />");
        }
    };
    Board.prototype.check_shot = function (x, y) {
        this.board[x - 1][y - 1] = "X ";
        document.write("<br />");
        if (x === this.ship_x && y === this.ship_y) {
            document.write("You sunk the ship!");
            this.shipfloats = false;
        }
    };
    Board.prototype.init = function () {
        this.fill_board();
        this.print_board();
    };
    return Board;
}());
var board = new Board(5, 8);
board.init();
while (board.shipfloats) {
    var coorx = document.getElementById("coox").value;
    var coory = document.getElementById("cooy").value;
    //coorx = window.prompt("Ingresa coordenada \"x\": ");
    //  coory = window.prompt("Ingresa coordenada \"y\": ");
    console.log("x :", coorx);
    console.log("y :", coory);
    board.check_shot(Number(coorx), Number(coory));
    board.print_board();
}
