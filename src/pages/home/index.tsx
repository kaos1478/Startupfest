import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Background from '../../components/Background'
import Button from '../../components/Button'
import BackgroundOpacity from '../../components/BackgroundOpacity'
import Banner from '../../components/Banner'
const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Background>
      <BackgroundOpacity>
        <Banner>
          <div>Bem vindo(a) a primeira edição da StartUp Fest.</div>
          <div>
            <Button
              onClick={() => {
                console.log('Opss... Função nao disponível')
              }}
              variant="secundaryBig"
            >
              Registrar StartUp
            </Button>
            <div />
            <Button
              variant="primaryBig"
              onClick={() => {
                router.push('/startups')
              }}
            >
              Visualizar StartUps
            </Button>
          </div>
        </Banner>
      </BackgroundOpacity>
    </Background>
  )
}

export default Home
