import React from 'react'
import InputField from './InputField'

export default function Timer({ isOverlay }): JSX.Element {
  return (
    <>
      <div>
        <InputField label={'minutes'} value={12} />
        <InputField />
        <InputField />
      </div>
    </>
  )
}
