/* eslint-disable react/no-unescaped-entities */
import styles from './index.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { FaGithub, FaGooglePlay } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'
import { FiGlobe } from 'react-icons/fi'
import Link from 'next/link'
import { IconType } from 'react-icons'

function MarketingLinks({
  icon: Icon,
  href,
  linkName
}: {
  icon: IconType
  href: string
  linkName: string
}) {
  return (
    <Link
      href={href}
      className='flex flex-col items-center justify-center gap-1'
    >
      <div className='w-[3.75rem] h-[3.75rem] text-[1.5rem] flex flex-col items-center justify-center text-white bg-black rounded-2xl'>
        <Icon />
      </div>
      <p>{linkName}</p>
    </Link>
  )
}

function SlideText() {
  return (
    <div>
      <div className={styles.slide}>
        <p className={styles.cta_text}>Finding a good mechanic is hard.</p>
      </div>
      {/* Slide 1 */}
      <div className={styles.slide1}>
        <p className={styles.cta_text}>
          It's stressful, time-consuming, and sometimes downright impossible.
        </p>
        <p className={styles.cta_text}>
          But don't worry - we've got you covered! Chapchap makes it easy to
          find top-rated mechanics in your area.
        </p>
      </div>
      {/* Slide 2  */}
      <div className={styles.slide2}>
        <p className={styles.cta_text}>
          Simply download the app, create your account and tada you connect with
          great mechanics in your location.
        </p>
        <p className={styles.cta_text}>
          If you are a mechanic, download the app and register as a garage to
          get your services discovered.
        </p>
      </div>
      {/* Slide 3  */}
      <div className={styles.slide3}>
        <div>
          <p className={styles.cta_text}>And great news, its Opensource</p>
          <p className={styles.cta_text}>Get it now at</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-5 md:gap-10'>
          <MarketingLinks icon={FaGooglePlay} href='#' linkName='playstore' />
          <MarketingLinks icon={FaGithub} href='#' linkName='github' />
          <MarketingLinks icon={DiAndroid} href='#' linkName='android apk' />
          <MarketingLinks icon={FiGlobe} href='#' linkName='website' />
        </div>
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
