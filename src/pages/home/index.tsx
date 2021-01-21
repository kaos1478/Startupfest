import { NextPage } from 'next'
import * as Styled from './styles'
import Background from '../../components/Background'
import Button from '../../components/Button'

const Home: NextPage = () => {
  return (
    <Background>
      <Styled.BackgroundOpacity>
        <Styled.Banner>
          <div>Bem vindo(a) a primeira edição da StartUp Fest.</div>
          <div>
            <Button variant="secundaryBig">Registrar StartUp</Button>
            <div />
            <Button variant="primaryBig">Visualizar StartUps</Button>
          </div>
        </Styled.Banner>
      </Styled.BackgroundOpacity>
    </Background>
  )
}

export default Home
