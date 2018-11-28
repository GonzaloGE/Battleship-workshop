function randomIntFromInterval(min,max) {// min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

class Board {
    rows:number;
    columns:number;
    ship_x:number;
    ship_y:number;
    board:string[][];
    shipfloats:boolean;

    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.ship_x = randomIntFromInterval(0, columns - 1);
        this.ship_y = randomIntFromInterval(0, rows - 1);
    }

    fill_board() {
        let b:string[][] = [];
    
        for (let i = 0; i < this.rows; i++) {
            b.push([]);
        }
        
        for (let i = 0; i < this.rows; i++) {
            
            for (let j:number = 0; j < this.columns; j++) {
                b[i].push("O ");
            }
        }
    
        this.board = b;
        this.shipfloats = true;
    }

    print_board() {
        for (let r of this.board) {
    
            for (let c of r) {
                document.write(c);
            }
    
            document.write("<br />");
        }
    }

    check_shot(x:number, y:number) {
        this.board[x-1][y-1] = "X "
        document.write("<br />");

        if (x === this.ship_x && y === this.ship_y) {
            document.write("You sunk the ship!")
            this.shipfloats = false;
        }
    }

    init() {
        this.fill_board();
        this.print_board();
    }
}

let board = new Board(5, 8);
board.init();

while (board.shipfloats) {
    let coorx = (<HTMLInputElement>document.getElementById("coox")).value;
    let coory = (<HTMLInputElement>document.getElementById("cooy")).value;
    
    //coorx = window.prompt("Ingresa coordenada \"x\": ");
  //  coory = window.prompt("Ingresa coordenada \"y\": ");

    console.log("x :",coorx);
    console.log("y :",coory);

    board.check_shot(Number(coorx),Number(coory)); 
    board.print_board();
}