import styles from './index.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { FaGithub, FaGooglePlay } from 'react-icons/fa'
import { SiAndroid } from 'react-icons/si'
import { FiGlobe } from 'react-icons/fi'
import Link from 'next/link'

function SlideText() {
  return (
    <div>
      <p>Finding a good mechanic is hard.</p>
      <div>
        <p>
          It's stressful, time-consuming, and sometimes downright impossible.
        </p>
        <p>
          But don't worry - we've got you covered! Chapchap makes it easy to
          find top-rated mechanics in your area.
        </p>
      </div>
      <div>
        <p>
          Simply download the app, create your account and tada you connect with
          great mechanics in your location.
        </p>
        <p>
          If you are a mechanic, download the app and register as a garage to
          get your services discovered.
        </p>
      </div>
      <div>
        <p>And great news, its Opensource</p>
        <p>Get it now at</p>
      </div>
      <div>
        <Link href='#'>
          <FaGooglePlay />
        </Link>
        <Link href='#'>
          <FaGithub />
        </Link>
        <Link href='#'>
          <SiAndroid />
        </Link>
        <Link href='#'>
          <FiGlobe />
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className={styles.root}>
      <Link
        href='https://github.com/WalterBanda/chapchap-client'
        className='fixed top-4 right-4 text-[1.5rem] text-[#202124]'
      >
        <VscGithubInverted />
      </Link>
      <SlideText />
    </main>
  )
}
