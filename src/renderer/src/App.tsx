import TopBar from './components/TopBar'
import { useEffect, useState } from 'react'
import Timer from './components/Timer'

function App(): JSX.Element {
  const [isOverlay, setIsOverlay] = useState<boolean>(false)

  useEffect(() => {
    window.electron.ipcRenderer.on('overlay-mode', () => {
      setIsOverlay((prevState) => !prevState)
    })

    return () => {
      window.electron.ipcRenderer.removeAllListeners('overlay-mode')
    }
  }, [])

  return (
    <>
      <div className={!isOverlay ? 'visible' : 'invisible'}>
        <TopBar />
        <div className="bg-black bg-opacity-40 rounded-b-xl">
          <Timer isOverlay={isOverlay} />
        </div>
      </div>
    </>
  )
}

export default App
