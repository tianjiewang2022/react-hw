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
  maxWidth: '200px',
  textAlign: 'center',
};
const boldTextStyle = {
  fontWeight: 'bold',
};
const gridContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
function App() {
  return (
    <GridProvider>
      <div style={appStyle}>
        <div className="counter" style={boldTextStyle}>Counts: <Counter /></div>
        <div className="grid-container" style={gridContainerStyle}>
          <div className="grid" style={gridStyle}>
            {/* {Array.from({ length: 2 }, (_, row) => ( */}
            {/* <div key={row} className="row">
              {Array.from({ length: 2 }, (_, col) => (
                <Cell key={col} row={row} col={col} />
              ))}
            </div> */}
            {/* ))} */}
            {Array.from({ length: 4 }, (_, index) => (
              <Cell key={index} row={Math.floor(index / 2)} col={index % 2} />
            ))}
          </div>
        </div>
      </div>
    </GridProvider>
  );
}
export default App;