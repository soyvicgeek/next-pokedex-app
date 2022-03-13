import { FC } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokémonApp'}</title>
        <meta name="author" content="soyvicgeek" />
        <meta
          name="description"
          content={`Información sobre el Pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokémon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/pokemon-home.jpg`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  )
}
