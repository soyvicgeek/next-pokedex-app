import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
  title?: string
}

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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
