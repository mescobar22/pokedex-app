import { useState } from "react";

function Finder() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("¡Botón presionado!");
  };

  return (
    <div>
      <input type="text" placeholder="Buscar pokemon..." />
      <button onClick={handleClick}>Buscar</button>
      <p>{message}</p>
    </div>
  );
}

export default Finder;
