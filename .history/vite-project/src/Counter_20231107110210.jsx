import React from 'react';
import { useGridContext } from './Grid';

export function Counter() {
    const { countOnCells } = useGridContext();
    return <span>{countOnCells()}</span>;
}


