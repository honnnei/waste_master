import logo from './logo.svg';
import './App.css';
import React from 'react';
import useDraggable from './hooks/useDraggable';
import Waste from './components/Waste';
import Bin from './components/Bin';
function App() {

  const { position } = useDraggable("handle");


  return (
    <div
      style={{
        position: 'relative',
        height: window.innerHeight,
        width: window.innerWidth,
        backgroundColor: 'grey',
        overflow: 'hidden',
        border: '1px solid black',
      }}
    >
      <Waste
        position={position}
        size={{
          height: 200,
          width: "auto"
        }}
      />
      <Bin />
    </div>
  );
}

export default App;
