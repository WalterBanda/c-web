import Meta from '@ui/meta'
import { Hero } from '@ui/slides'
import Background from 'components/background'

function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Meta />
      <Hero />
      <Background />
    </div>
  )
}

export default Home
