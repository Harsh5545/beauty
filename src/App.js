import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Atom/Loader/Loader";
import Home from "./Pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clear the timeout to prevent a memory leak
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
        </>)}
    </div>
  );
}

export default App;
