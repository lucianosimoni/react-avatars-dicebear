import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [seed, setSeed] = useState(9);

  useEffect(() => {
    // 10 Seconds timer
    const interval = setInterval(() => {
      const randomInteger = Math.floor(Math.random() * 1000);
      setSeed(randomInteger);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Welcome!</h1>
      </header>

      <main>
        <div className="card-wrapper">
          <Card spriteName="adventurer" seed={seed} />
          <Card spriteName="adventurer-neutral" seed={seed} />
          <Card spriteName="avataaars" seed={seed} />
        </div>
      </main>
    </div>
  );
}

export default App;
