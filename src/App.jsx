import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count === 9) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count === 0) {
      setCount(10);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="container">
      <h1 className="world">
        esto esta perron {count}
      </h1>

      <input type="button" value="increment" onClick={increment} />
      <input type="button" value="decrement" onClick={decrement} />
      </div>
      
    </>
  )
}

export default App
