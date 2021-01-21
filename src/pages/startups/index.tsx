import Link from 'next/link'
import { NextPage } from 'next'

const Startups: NextPage = () => {
  return (
    <div>
      <h1>Startups</h1>
      <Link href={'/startups/1'}>teste</Link>
    </div>
  )
}

export default Startups
