import { NextPage } from 'next'
import { ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secundary' | 'primaryBig' | 'secundaryBig'
}

const Button: NextPage<IButton> = ({ children, variant, ...rest }) => {
  return (
    <Styled.Container variant={variant} {...rest}>
      {children}
    </Styled.Container>
  )
}

export default Button
