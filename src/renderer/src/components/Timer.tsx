import React, { useEffect, useState } from 'react'
import InputField from './InputField'

export default function Timer({ isOverlay }): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {}, 1000)
    } else {
      clearInterval(intervalId)
    }
  }, [isActive, hours, minutes, seconds])

  return (
    <>
      {isEditing ? (
        // Time Setup
        <div className="flex justify-center">
          <div>
            <InputField
              label={'Hours'}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <InputField
              label={'Minutes'}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <InputField
              label={'Seconds'}
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <button
              className="bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-xl mt-1 ml-1"
              onClick={() => setIsEditing(false)}
            >
              Start
            </button>
          </div>
        </div>
      ) : (
        //Render Timer
        <div>
          <div className="flex justify-center">
            <h1 className="text-green-500 text-6xl">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
          </div>
          <div
            id="timer-buttons"
            className="text-stone-500 flex justify-center bg-black bg-opacity-10 rounded-xl"
          >
            {isActive ? (
              <>
                <button>pause</button>
                <button>stop</button>
              </>
            ) : (
              <>
                <button
                  className="start text-5xl text-green-500 m-2"
                  onClick={() => setIsActive(true)}
                >
                  &#9658;
                </button>
                <button
                  className="start text-5xl text-yellow-500 m-2"
                  onClick={() => setIsEditing(true)}
                >
                  &#9998;
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
