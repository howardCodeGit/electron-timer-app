import { Input } from 'electron'
import React, { ChangeEventHandler } from 'react'

interface InputFieldProps {
  label: string
  value: number
  onChange: ChangeEventHandler<HTMLInputElement>
  placeHolder?: string
}

export default function InputField({
  label,
  value,
  onChange,
  placeHolder
}: InputFieldProps): JSX.Element {
  const handleInputChange = (e): void => {
    const inputValue: string = e.target.value
    const regex: RegExp = /^\d+$/
    if (regex.test(inputValue)) {
      onChange(e)
    }
  }
  return (
    <>
      <div className="text-3xl">
        <label className="text-stone-00">{label}</label>
        <input
          className="w-20 bg-transparent text-blue-400"
          type="number"
          value={value}
          onChange={handleInputChange}
          placeholder={placeHolder}
        />
      </div>
    </>
  )
}
