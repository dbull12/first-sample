import { useState } from "react";

const StateExe = () => {
    const [counter, setCounter] = useState(0);
    
      function add() {
        console.log(counter, setCounter);
      }

  
    function IncreseAge() {
      setCounter((prev) => prev + 1);
      console.log(counter);
    }

}