import styles from './index.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import Link from 'next/link'
import CTA from './slides'

export default function Home() {
  return (
    <main className={styles.root}>
      <Link
        href='https://github.com/WalterBanda/chapchap-client'
        className='fixed top-4 right-4 text-[1.5rem] text-[#202124]'
      >
        <VscGithubInverted />
      </Link>
    </main>
  )
}
