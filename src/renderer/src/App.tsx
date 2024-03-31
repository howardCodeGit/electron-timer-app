import TopBar from './components/TopBar'
import { useState } from 'react'
import Timer from './components/Timer'

function App(): JSX.Element {
  const [isOverlay, setIsOverlay] = useState<boolean>(false)

  return (
    <>
      <TopBar />
      <Timer />
    </>
  )
}

export default App
