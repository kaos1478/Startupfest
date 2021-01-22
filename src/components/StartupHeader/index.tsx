import { NextPage } from 'next'
import * as Styled from './styles'

interface IStartupHeader {
  title?: string
  subtitle?: string
  img: string
}

const StartupHeader: NextPage<IStartupHeader> = ({ title, subtitle, img }) => {
  return (
    <Styled.Container img={img}>
      <h1>{title || ''}</h1>
      <h2>{subtitle || ''}</h2>
    </Styled.Container>
  )
}

export default StartupHeader
