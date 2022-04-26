import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resident streamer - Jeu multijoueur en ligne</title>
        <meta name="description" content="Jeu Resident streamer - Jeu multijoueur en ligne de 1 à 4 joueurs, combattez le plus rapidement possible les 5 boss ! Techologies: Phaser 3, Colyseus - A speedrun game free with streamer characters available online" />
        <meta name="theme-color" content="#001d36" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="Robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Prochainement Resident Streamer !
        </h1>

        <p className={styles.description}>
          Jeu multijoueur en ligne !
        </p>

        <h2>De 1 à 4 joueurs</h2>
        <h3>Vous pouvez incarner 4 personnages streamers :</h3>

        <div className={styles.grid}>
          <a href="https://resident-streamer.servegame.com" className={styles.card}>
            <h2>Akizonah</h2>
            <p>personnage poseur de pièges.</p>
          </a>

          <a href="https://resident-streamer.servegame.com" className={styles.card}>
            <h2>Fakhear</h2>
            <p>personnage résistant et spécialisé aux corps-à-corps.</p>
          </a>

          <a
            href="https://resident-streamer.servegame.com"
            className={styles.card}
          >
            <h2>Osmosiscoop</h2>
            <p>personnage qui consiste à soigner ses alliés.</p>
          </a>

          <a
            href="https://resident-streamer.servegame.com"
            className={styles.card}
          >
            <h2>Huzounet</h2>
            <p>
            personnage qui attaquent à distance et dont ça résistance laisse à désirer.
            </p>
          </a>
        </div>

        <h4>Le temps sera arrêté lorsque vous aurez vaincu tous les boss des pièces.Ce temps sera le score de l’équipe qui sera ajouté à la liste du classement avec le nom de l’équipe choisi et ses membres. Pour être le premier dans le classement il faut avoir le temps le plus petit.</h4>
        <h5>Suivez nous</h5>
        <p>
        <a
        href="https://twitter.com/buibui5757">Tweeter</a>-
        <a
        href="https://www.instagram.com/residentstreamer">Instagram</a>-
        <a
        href="https://www.facebook.com/people/Resident-Streamer/100080096264302">Facebook</a></p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://resident-streamer.servegame.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
