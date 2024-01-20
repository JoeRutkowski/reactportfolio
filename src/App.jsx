import { useState } from 'react'
import Sidenav from './components/sidenav.jsx'
import Main from './components/main.jsx'
import Work from './components/Work.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Sidenav />
     <Main />
     <Work />
     <Projects />
    </div>
  )
}

export default App
