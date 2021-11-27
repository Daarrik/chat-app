import React from 'react';
export const socket = io('ws://localhost:3000');

const App = () => {
  
  return (
    <div className="App">
      <Messages/>
      <Input/>
    </div>
  );
}

export default App;
