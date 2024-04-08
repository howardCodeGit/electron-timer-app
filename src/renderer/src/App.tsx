import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
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
      </div>
      <div
        className={
          !isOverlay
            ? 'bg-black bg-opacity-40 p-2 rounded-b-xl'
            : 'bg-black bg-opacity-40 p-2 rounded-xl'
        }
      >
        <Timer isOverlay={isOverlay} />
      </div>
    </>
  )
}

export default App
