import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import PriceOptions from './Component/PriceOptions/PriceOptions';
import Linechart from './Component/Linechart/Linechart';
import Phones from './Component/Phones/Phones';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
      <Phones></Phones>

    </>
  );
}

export default App;
