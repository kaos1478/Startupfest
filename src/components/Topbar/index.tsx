import { NextPage } from 'next'
import Link from 'next/link'
import * as Styled from './styles'
import Button from '../Button'

const Topbar: NextPage = () => {
  return (
    <Styled.Container>
      <div>
        <Styled.Logo>
          <h1>StartUp Fest</h1>
        </Styled.Logo>
        <Styled.Menu>
          <Styled.MenuItem>
            <Link href="/home">Home</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/startups">Startups</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/ranking">Ranking</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Button variant="primary">Log In</Button>
          </Styled.MenuItem>
        </Styled.Menu>
        <Styled.Burger>
          <div />
          <div />
          <div />
        </Styled.Burger>
      </div>
    </Styled.Container>
  )
}

export default Topbar
