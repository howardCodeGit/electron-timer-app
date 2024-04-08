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
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
        <div
          id="control-buttons"
          className="text-stone-200 absolute top-1 right-0 pe-2"
          style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
        >
          <button id="minimize" onClick={handleMinimize}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button id="close" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
