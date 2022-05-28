import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter/Counter';

function App() {
  const [url, setUrl] = useState('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    // eslint-disable-next-line no-undef
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);
  return (
    <div className="App">
      <Counter />
      <p>URL:</p>
      <p>
        {url}
      </p>
    </div>
  );
}

export default App;
