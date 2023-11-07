import React from 'react';
import Cell from './Cell';
import { GridProvider } from './Grid';
import Counter from './Counter'

export function App() {
  return (
    <GridProvider>
      <div>
        <div className="counter">Counts: <Counter /></div>
        <div className="grid">
          {Array.from({ length: 2 }, (_, row) => (
            <div key={row} className="row">
              {Array.from({ length: 2 }, (_, col)) => (
              <Cell key={col} row={row} col={col} />
              )}
            </div>
          ))}
        </div>
      </div>
    </GridProvider>
  );
}
