
// import { useState, useEffect } from "react";

import Home from "./components/Home/Home"

export function App() {

  // const [message, setMessage] = useState(null);

  // useEffect(() => {

  //     fetch("http://localhost:5000/api/message")
  //     .then(res => res.json()) 
  //     .then(data => setMessage(data.text));
      
  // });

  return (
    <>
      {/* {message} */}
      <Home />
    </>
  );

}

export default App;