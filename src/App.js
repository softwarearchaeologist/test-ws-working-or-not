import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const EtherComp = () => {
  const provider = new ethers.providers.WebSocketProvider("wss://rpc-ws-mainnet.kcc.network");
  const [block, setBlock] = useState(0);

  useEffect(() => {
    provider.on('block', async (block) => {
      setBlock(block)
    })
  }, [provider])


  return (
    <div>
      {`Current Block Number is: ${block}`}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Websockets
        </a>

        <EtherComp/>
      </header>
    </div>
  );
}

export default App;
