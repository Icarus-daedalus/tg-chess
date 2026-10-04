import { Cell } from "../Cell";
import { Colors } from "../Colors";

export const FigureNames = {
    FIGURE: "Фигура",
    BISHOP: "Слон",
    KING: "Король",
    KNIGHT: "Конь",
    PAWN: "Пешка",
    QUEEN: "Ферзь",
    ROOK: "Ладья",
} as const;

export type FigureNames = typeof FigureNames[keyof typeof FigureNames];

export class Figure {
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: FigureNames;
    id: number;



    constructor(color: Colors, cell: Cell,) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }
    canMove(target: Cell) : boolean {
        return true;
    }
    moveFigure(target: Cell) {

    }
}