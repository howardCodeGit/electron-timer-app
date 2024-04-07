import React, { useEffect, useState } from 'react'
import InputField from './InputField'
import AlarmSound from '../assets/sounds/alarm_sound.mp3'

interface TimerProps {
  isOverlay: boolean
}

export default function Timer({ isOverlay }: TimerProps): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const audio = new Audio(AlarmSound)

  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        } else if (hours > 0) {
          setHours(hours - 1)
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          // Play Audio Alarm
          audio.play()
          clearInterval(intervalId)
          setIsActive(false)
        }
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isActive, hours, minutes, seconds])

  return (
    <>
      {isEditing ? (
        // Time Setup
        <div className="flex justify-center">
          <div>
            <InputField
              label={'Hours: '}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <InputField
              label={'Minutes: '}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <InputField
              label={'Seconds: '}
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
                <button
                  className="pause text-5xl text-yellow-500 m-2"
                  onClick={() => setIsActive(false)}
                >
                  &#10073;&#10073;
                </button>
                <button
                  className="stop text-5xl text-red-500 m-2"
                  onClick={() => {
                    setIsActive(false)
                    setHours(0)
                    setMinutes(0)
                    setSeconds(0)
                  }}
                >
                  &nbsp;&#9724;
                </button>
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
                  className="edit text-5xl text-yellow-500 m-2"
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
