import styles from './index.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import Link from 'next/link'
import Image from 'next/image'

function Slides() {
  return (
    <div className='w-full h-full'>
      <h1 className={styles.splash_hero}>Finding a good mechanic is hard.</h1>
      <div className={styles.splash}>
        <Image src='/marketing/splash.png' alt='Splash page for app' fill />
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
      <Slides />
    </main>
  )
}
