import { NextPage } from 'next'
import * as Styled from './styles'

const Content: NextPage = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Content
