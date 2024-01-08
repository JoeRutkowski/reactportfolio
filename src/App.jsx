import { useState } from 'react'
import Sidenav from './components/sidenav.jsx'
import Main from './components/main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Sidenav />
     <Main />
    </div>
  )
}

export default App
