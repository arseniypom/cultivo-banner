'use client'

import { Button as MaterialButton } from '@mui/material'
import { ReactNode } from 'react'

import classNames from 'classnames'
import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary'
  onClick: () => void
  children: ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  className,
}) => {
  return (
    <MaterialButton
      className={classNames(styles.button, styles[variant], className)}
      onClick={onClick}
    >
      {children}
    </MaterialButton>
  )
}
