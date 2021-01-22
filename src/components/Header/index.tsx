import { NextPage } from 'next'
import * as Styled from './styles'

interface IHeader {
  title?: string
  subtitle?: string
  img: string
}

const Header: NextPage<IHeader> = ({ title, subtitle, img }) => {
  return (
    <Styled.Container img={img}>
      <h1>{title || ''}</h1>
      <h2>{subtitle || ''}</h2>
    </Styled.Container>
  )
}

export default Header
