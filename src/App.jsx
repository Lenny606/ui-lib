import React from 'react';
import Button from './assets/Components/Button';

function App() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <Button label="Click me" onClick={handleClick} />
    </div>
  );
}

export default App;
