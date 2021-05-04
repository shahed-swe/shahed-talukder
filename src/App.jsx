import React, {useEffect} from "react";
import Main from './container/Main'

function App() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <div className="App">
      <Main/>
    </div>
  )
}

export default App;
