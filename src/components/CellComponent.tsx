import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell;
  }

const CellComponent: React.FC<CellProps> = ({ cell }) => {
    return (
        <div className={["cell", cell.color].join(' ')}>
        </div>
        {cell.figure}
    );
};

export default CellComponent;