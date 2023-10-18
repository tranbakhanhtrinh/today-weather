import React, { MouseEventHandler, ReactNode } from 'react'

type ButtonType = 'submit' | 'button'

type ButtonProps = {
  type: ButtonType
  children: ReactNode
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  type,
  children,
  disabled,
  className,
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mb-4 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
