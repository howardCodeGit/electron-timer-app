import React from 'react'

export default function TopBar(): JSX.Element {
  const handleClose = (): void => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = (): void => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <div>
      <div
        className="rounded-t-xl bg-blue-400 w-screen h-8"
        style={{ WebkitAppRegion: 'drag' }}
      ></div>
      <div id="control buttons" className="text-stone-200 absolute top-1 right-0 pe-2">
        <button id="minimize" onClick={handleMinimize}>
          &#128469;
        </button>
        <button id="close" onClick={handleClose}>
          &#10006;
        </button>
      </div>
    </div>
  )
}
