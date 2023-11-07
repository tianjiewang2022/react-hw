import React from 'react';
import Cell from './Cell';
import { GridProvider } from './Grid';
import Counter from './Counter'

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '5px',
  maxWidth: '200px',
  textAlign: 'center',
};

function App() {
  return (
    <GridProvider>
      <div style={appStyle}>
        <div className="counter">Counts: <Counter /></div>
        <div className="grid" style={gridStyle}>
          {Array.from({ length: 2 }, (_, row) => (
            <div key={row} className="row">
              {Array.from({ length: 2 }, (_, col) => (
                <Cell key={col} row={row} col={col} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </GridProvider>
  );
}
export default App;