import Head from "next/head";

export default function Meta() {
    return (
      <Head>
        <title>ChapChap</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='title'
          content='ChapChap - Location based mechanical service delivery'
        />
        <meta
          name='description'
          content='ChapChap helps you find and deliver services to your nearest customer. It aids motorists in locating the nearest service center, ensuring that they are never stranded on the road again.'
        />

        {/*  Open Graph / Facebook  */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://chapchap.murima/' />
        <meta
          property='og:title'
          content='ChapChap - Location based mechanical service delivery'
        />
        <meta
          property='og:description'
          content='ChapChap helps you find and deliver services to your nearest customer. It aids motorists in locating the nearest service center, ensuring that they are never stranded on the road again.'
        />
        <meta
          property='og:image'
          content='https://chapchap.murima/marketing/thumbnail.png'
        />

        {/*Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content='https://chapchap.murima/' />
        <meta
          name='twitter:title'
          content='ChapChap - Location based mechanical service delivery'
        />
        <meta
          name='twitter:description'
          content='ChapChap helps you find and deliver services to your nearest customer. It aids motorists in locating the nearest service center, ensuring that they are never stranded on the road again.'
        />
        <meta
          name='twitter:image'
          content='https://chapchap.murima/marketing/thumbnail.png'
        />

        {/* iOS meta tags & icons */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='white' />
        <meta name='apple-mobile-web-app-title' content='ChapChap' />
        <link rel='apple-touch-icon' href='icons/apple-touch-icon.png' />
      </Head>
    )
}