import { useState } from "react";

     const Counter =()=> {
const [counter, setcounter] = useState (0);

const addup = () => {
    setcounter (counter +1)
}

const reduce = () => {
    setcounter (counter -1)
}


const reset = () => {
 setcounter(0)
}

return (
    <>
    <section>
        <h1>
            Counter valve : {counter}
        </h1>
    </section>
      <div>
        <button onClick={addup}>increase</button>
        <button onClick={reduce}>decrease</button>
        <button onClick={reset} >reset</button>
    </div>
    </>
)

}
export default Counter;