import { Input } from 'electron'
import React from 'react'

interface InputFieldProps {
  label: string
  value: number
  onChange: React.ChangeEvent
  placeHolder: string
}

export default function InputField({
  label,
  value,
  onChange,
  placeHolder
}: InputFieldProps): JSX.Element {
  return (
    <>
      <div>
        <label>{label}</label>
      </div>
    </>
  )
}
