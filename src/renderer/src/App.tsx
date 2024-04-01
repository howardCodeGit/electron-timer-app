import TopBar from './components/TopBar'
import { useState } from 'react'
import Timer from './components/Timer'

function App(): JSX.Element {
  const [isOverlay, setIsOverlay] = useState<boolean>(false)

  return (
    <>
      <TopBar />
      <div className="bg-black bg-opacity-40 rounded-b-xl">
        <Timer />
      </div>
    </>
  )
}

export default App
