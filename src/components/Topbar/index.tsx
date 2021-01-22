import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import * as Styled from './styles'
import Button from '../Button'
import Router from 'next/router'
const Topbar: NextPage = () => {
  const [auth, setAuth] = useState<any>({})
  const [menuToggle, setMenuToggle] = useState<any>(false)

  return (
    <Styled.Container>
      <div>
        <Styled.Logo>
          <h1>StartUp Fest</h1>
        </Styled.Logo>
        <Styled.Menu menuToggle={menuToggle}>
          <Styled.MenuItem>
            <Link href="/">Home</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/startups">Startups</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Button variant="primary">
              {auth.email ? 'Log Out' : 'Log In'}
            </Button>
          </Styled.MenuItem>
        </Styled.Menu>
        <Styled.Burger
          onClick={() => {
            setMenuToggle(!menuToggle)
          }}
        >
          <div />
          <div />
          <div />
        </Styled.Burger>
      </div>
    </Styled.Container>
  )
}

export default Topbar
