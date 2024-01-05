import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidenav from './components/sidenav'
import Main from './components/main'

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
