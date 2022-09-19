import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import { useState } from 'react';

function App() {
  let[myNum,setMyNum]=useState(12)
  return (
    <div className="App">
      <Comp1 valueOfMyNum={myNum} abc={"Hello"}/>
      <Comp2 />
    </div>
  );
}

export default App;
