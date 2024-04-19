import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    console.log(card);
  }, []);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header card={card} setCard={setCard} />
      <Main setCard={setCard} />
    </div>
  );
}

export default App;
