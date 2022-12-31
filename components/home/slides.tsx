import styles from './index.module.scss'

export function Slide() {
  return (
    <div className={styles.slide}>
      <h1>Finding a good mechanic is hard.</h1>
    </div>
  )
}

export function Slide1() {
  return (
    <div className={styles.slide1}>
      <div>
        <p>
          It's stressful, time-consuming, and sometimes downright impossible.
        </p>
        <p>
          But don't worry - we've got you covered! Chapchap makes it easy to
          find top-rated mechanics in your area.
        </p>
      </div>
    </div>
  )
}

export function Slide2() {
  return (
    <div className={styles.slide2}>
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
    </div>
  )
}

export function Slide3() {
  return (
    <div className={styles.slide3}>
      <div>
        <p>And great news, its Opensource</p>
        <p>Get it now at</p>
      </div>
    </div>
  )
}

export default function CTA() {
  return (
    <div>
      <Slide />
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </div>
  )
}