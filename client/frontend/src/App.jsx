
import { useState, useEffect } from "react";

export function App() {

  const [message, setMessage] = useState(null);

  useEffect(() => {

      fetch("http://localhost:5000/api/message")
      .then(res => res.json()) 
      .then(data => setMessage(data.text));
      
  });

  return (
    <>
      {message}
    </>
  );

}

export default App;