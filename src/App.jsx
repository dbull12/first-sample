import { useState } from "react" 
import Counter from "./practiceclass/Counter"
import Assignment from "./practiceclass/Assignment1"
function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <div>
      <Counter/>
      <Assignment1/>
      </div>
    </section>
  )
}

export default App
