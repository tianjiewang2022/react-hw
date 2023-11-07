import Cell from './Cell';
import { GridProvider } from './Grid';

function Grid() {
  return (
    <GridProvider>
      <div>
        <div className="counter">Counts: <Counter /></div>
        <div className="grid">
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

export default Grid;
