import React from 'react';
import Palette from './Palette'
import SeedColors from './SeedColors'


function App() {
  return (
    <div className="App">
      <Palette {...SeedColors[4]} />
    </div>
  );
}

export default App;
