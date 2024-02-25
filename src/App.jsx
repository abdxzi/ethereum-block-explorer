import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import './App.css';
import Topbar from './components/Topbar';
import BlockData from './components/BlockData';

function App() {
  const [blockNumber, setBlockNumber] = useState();

  return (
    <>
      <Topbar setBlock={setBlockNumber} />
      <BlockData block={blockNumber} setBlock={setBlockNumber}/>
      <Toaster />
    </>
  );
}

export default App;
