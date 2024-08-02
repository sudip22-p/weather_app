import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className="p-2 border-y-2 bg-yellow-400 text-3xl text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad accusantium quibusdam voluptas facilis ullam ut fugit sequi vel. Provident, incidunt voluptatem?</p>
      </div>
    </>
  )
}

export default App
