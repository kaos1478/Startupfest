import { NextPage } from 'next'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import Navbar from '../components/Topbar'
import Main from '../components/Main'
import Container from '../components/Container'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Main>
    </div>
  )
}

export default MyApp
