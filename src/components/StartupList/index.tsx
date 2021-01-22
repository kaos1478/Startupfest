/* eslint-disable camelcase */
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import * as Styled from './styles'
import StartupCard from './StartupCard'
import api from '../../services/api'

export interface IStartupCard {
  id: number
  startup_name: string
  category: string
  city: string
  thumbnail: string
}

const StartupList: NextPage = () => {
  const [startups, setStatups] = useState<IStartupCard[]>([])

  useEffect(() => {
    api.get<IStartupCard[]>('/').then(res => {
      console.log(res.data)
      setStatups(res.data.startups)
    })
  }, [])

  return (
    <Styled.Container>
      {startups.map(startup => {
        return (
          <StartupCard
            key={startup.id}
            id={startup.id}
            startup_name={startup.startup_name}
            category={startup.category}
            city={startup.city}
            thumbnail={startup.thumbnail}
          />
        )
      })}
    </Styled.Container>
  )
}

export default StartupList
