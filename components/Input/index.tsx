import React, { ChangeEventHandler } from 'react'

type InputProps = {
  type: string
  id: string
  value: string
  label: string
  name?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  otherProps?: any
}

const Input = ({
  type,
  id,
  value,
  name,
  label,
  otherProps,
  onChange
}: InputProps) => {
  return (
    <div className='flex gap-3 mb-4'>
      <label
        htmlFor={id}
        className='w-[80px] md:w-auto font-semibold'
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        className='focus-within:outline-none px-2'
        {...otherProps}
      />
    </div>
  )
}

export default Input
