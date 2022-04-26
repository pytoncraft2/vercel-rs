import type { NextPage } from 'next';
import Head from 'next/head';
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

      <article id="ad128173-7b50-4623-b037-0db325e80c94" className="page sans">
  <header>
    <h1 className="page-title">Cahier des charges</h1>
  </header>
  <div className="page-body">
    <h1 id="708b5a37-0704-480b-90cb-a2be15f2108c" className="">
      <span style={{ borderBottom: "0.05em solid" }}>
        <strong>Le projet</strong>
      </span>
    </h1>
    <h2 id="85e3dd2c-22ae-4258-bcc2-3eb2ed417729" className="">
      Présentation du client
    </h2>
    <h1
      id="026acbdf-f95c-4524-b713-7728151fa47d"
      className="block-color-red_background"
    >
      Le client
    </h1>
    <p id="f9c6dc15-a596-4745-9425-fa9a980c2f14" className="">
      Un publique de plus de<strong> 12 ans</strong>,
    </p>
    <p id="9aaffaa4-bb16-4782-a8d0-d86b08fdafec" className="">
      Les clients sont des streamers, viewers, joueurs.
    </p>
    <p id="7be85350-8849-444d-846f-3ce957621a4d" className="">
      Ils ont un ordinateur et ils vont sur des plateformes de diffusion de jeu
      en direct.
    </p>
    <p id="d34b4c72-50b2-47ce-a768-708497705c35" className="">
      Pour les personnes qui font des jeux communautaires en live
    </p>
    <h2 id="c0f9a775-8ea3-4748-9d65-e09ccf3a3ca4" className="">
      Présentation du besoin
    </h2>
    <p id="d149c294-eec1-46cb-9701-c0cc91958848" className=""></p>
    <p id="762ac26c-24e5-4efe-a782-37b8d6bc2f2d" className="">
      Divertir les joueurs et permettre aux streamers de jouer avec ces viewers
      par l’intermédiaire du jeu
    </p>
    <p id="b6869d1a-c88b-4bb5-8b69-f95a9e03cf71" className="">
      Défie entre streamers et viewers
    </p>
    <p id="82615c00-e841-40aa-91b0-5aa12260aa51" className=""></p>
    <h3
      id="bb7b412f-1b9f-42a6-b574-496f85b5eda3"
      className="block-color-orange_background"
    >
      Réponse du formulaire posé aux streameurs/viewers
    </h3>
    <p id="744a858b-e01b-4cfa-a72f-47c23058ca82" className=""></p>
    <p id="b2aa3518-c7da-4af8-abb7-2bc6b9715c1d" className="block-color-blue">
      -Quels sont tes besoins sur twitch ?( questions à poser aux streamers et
      viewers) ?
    </p>
    <ul id="2c9a9553-3e8a-47b2-8239-75238ef1b08e" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Je sais pas</li>
    </ul>
    <ul id="d2aab4ea-402e-49a4-ac5c-43465de14c9b" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        argent, non en vrai, un chat actif, m&apos;amuser.
      </li>
    </ul>
    <ul id="8050d39c-a961-4b36-87f8-227db08e78f1" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Aucun</li>
    </ul>
    <ul id="2f8c2f45-21b4-4209-9655-2661b30575d6" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        je n&apos;en ai pas forcément car je suis juste viewer et pas forcément
        active dans le chat mais je préfère être face à un stream qui a un son
        de qualité et un stream de qualité (le partage d&apos;écran)
      </li>
    </ul>
    <p id="139b4b9b-c761-43f7-875f-a5ec2e8daf39" className=""></p>
    <p id="623154d0-7b58-432c-a16b-be8d3282289c" className="block-color-blue">
      -Est-ce que c’est un besoin de rapprocher les viewers et streamers ?
    </p>
    <ul id="f979b1e5-e24d-44a2-9282-031ce3b9c024" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Oui, même si c&apos;est compliqué avec les gros streamers.
      </li>
    </ul>
    <ul id="123dab0f-7aab-4123-b493-5284a57fdad2" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Oui si tu veux un chat avec une ambiance collective et des délires
        communs, ça aide
      </li>
    </ul>
    <ul id="19c6fc40-b6ed-4c36-90e6-21c6edba1a0a" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Non</li>
    </ul>
    <ul id="9b8ac02d-03fa-40b7-9b2b-dbe7608b3675" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Je suppose que oui car c&apos;est toujours plus agréable d&apos;avoir un streamer
        qui interagit avec sa communauté et ses viewers.
      </li>
    </ul>
    <p id="6717c532-3844-4eef-9e64-4f386127cc21" className=""></p>
    <p id="2e32faae-5e0c-4d03-a89b-600486d3ddea" className="block-color-blue">
      -si oui un besoin de rapprocher les viewers et streamers. La solution que
      nous allons mettre en place. c&apos;est la création d&apos;un jeu speedrun online
      multijoueur(personnage streamer) qui a pour but de finir le jeu le plus
      rapidement possible.A la fin de la partie le score sera dans le
      classement. Ainsi on peut rejouer pour dépasser ce score et même faire des
      défies interstreamers avec leurs viewers.Ce jeu permettra de renforcer le
      lien entre streamers et viewers. Serais-tu intéressé par cette idée?
    </p>
    <ul id="a0a9b912-58b2-4675-af6d-c7e6a03bddd4" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Oui</li>
    </ul>
    <ul id="eef2276d-6c10-4757-97b2-3e66f7cfcd90" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Intéressé par le jeu oui mais pas tant avec le lien streamer/viewer
      </li>
    </ul>
    <ul id="83bc5293-2dd1-4214-9d6e-a239ebe3b635" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Oui ça peut être très intéressant
      </li>
    </ul>
    <p id="1e2f2f52-c4f9-440f-8f58-b8ebf0ddf435" className=""></p>
    <p id="066499e5-3ba7-49ca-be97-521550334a3b" className=""></p>
    <p id="37239911-0dad-405e-b8c9-3a8b7a6f77bf" className=""></p>
    <p id="adfff1bc-b36c-43d7-999b-b9d37cf66c4b" className="">
      Koripeluche (streameuse)
    </p>
    <p id="59adf8a2-d993-4768-bee5-e2c82ae3e81f" className="">
      Pour les personnes qui font des jeux communautaires en live ça peut être
      cool oui
    </p>
    <h1 id="44ff19bb-acef-4c40-80a7-4b0c30caff2b" className="">
      Description rapide du projet
    </h1>
    <p id="ea8e5284-d683-47cc-a26c-d822bd6b7d9a" className=""></p>
    <p id="b0c08b71-fa72-4cd4-b258-9dc143d2d798" className="">
      Le projet est une réalisation d’un jeu vidéo de type speed run en
      multijoueur 2D en ligne avec le Framework Javascript Phaser 3,
    </p>
    <p id="420b850e-0b84-474a-94c3-8e0a5febaf6b" className="">
      La scène se passe dans une maison composée de plusieurs pièces.
    </p>
    <p id="0e8bbf88-e1ac-4cb3-955b-68a1c7506771" className="">
      A travers cette maison votre équipe composée de 2 à 4 personnes a pour
      mission de supprimer les boss dans chaque pièce le plus rapidement
      possible.
    </p>
    <p id="5c266548-c2f8-4e76-a8d5-68bd555f46ca" className=""></p>
    <p id="c3c2633c-b528-4638-9ed3-a3973d9771f8" className="">
      Vous pouvez incarner 4 personnages streamers :
    </p>
    <ul
      id="ac805b0f-2e3e-4a50-9c89-70a3a130f55c"
      className="block-color-teal bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Fakhear: personnage résistant et spécialisé aux corps-à-corps
      </li>
    </ul>
    <ul
      id="6a3264ff-c7b2-4009-8751-80d34cebd325"
      className="block-color-brown bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Huzounet: personnage qui attaquent à distance et dont ça résistance
        laisse à désirer.
      </li>
    </ul>
    <ul
      id="57c18257-c461-4a21-93fb-f59e485c195d"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Akhizonah: personnage poseur de pièges
      </li>
    </ul>
    <ul
      id="03a43051-5bac-4206-abe0-46686fce5e63"
      className="block-color-yellow bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Osmosiscoop : personnage qui consiste à soigner ses alliés
      </li>
    </ul>
    <p id="1da0a5e0-c638-40fa-9f54-c7cde82d883c" className=""></p>
    <p id="013c3a71-7871-4c39-8a47-04f912d208a1" className=""></p>
    <p id="f8bdf3d1-087b-4f3f-b843-71475e6daf3b" className="">
      Le temps sera arrêté lorsque vous aurez vaincu tous les boss des pièces.
      Ce temps sera le score de l’équipe qui sera ajouté à la liste du
      classement avec le nom de l’équipe choisi et ses membres. Pour être le
      premier dans le classement il faut avoir le temps le plus petit.
    </p>
    <p id="82a54c2c-68d0-41c7-b7bc-1bab18c9ca4b" className=""></p>
    <h1 id="a861fed4-3ced-42ea-8e4a-2e026fd36a08" className="">
      Description générale du projet
    </h1>
    <p id="a3ef8be3-1480-400d-b030-ea5e81169e69" className=""></p>
    <p id="ee90cf2b-a380-4167-9154-352fbf07051a" className="">
      Le projet est une réalisation d’un jeu vidéo de type speed run (
      <em>
        <strong>Individual Levels</strong>
      </em>
      .&nbsp;
      <em>
        <strong>Any</strong>
      </em>
      <strong>% Co-op,</strong>
      <strong>
        <em> </em>
      </strong>
      <strong>% Solo</strong>
      <em>
        <strong>) </strong>
      </em>
      le but est d&apos;atteindre la fin du jeu le plus rapidement possible. Les
      stratégies peuvent inclure d&apos;ignorer les éléments optionnels du jeu, voire
      d&apos;utiliser des erreurs dans la programmation du jeu (<em>bugs</em> ou{" "}
      <em>glitches</em>) pour contourner des passages que les développeurs
      avaient prévu comme obligatoires (<em>sequence breaking</em>).) en
      multijoueur 2D en ligne avec le Framework Javascript Phaser 3 disponible
      sur le web accessible à tous, jouable jusqu’à 4 personnes. Nous utilisons
      Typescript pour ce projet pour améliorer et sécuriser la production de
      notre code JavaScript.
    </p>
    <p id="3bced0fd-5bf2-4a76-a364-d8b18d9d9088" className=""></p>
    <p id="d16349df-5f59-4e52-a93d-1d57aad5c987" className="">
      Ce jeu ne nécessite pas d’inscription pour donner envie aux joueurs de
      jouer directement.
    </p>
    <p id="cebed7a0-8443-4e20-8985-07db4e77d127" className="">
      Le jeu est destiné aux personnes intéressées par les streameurs et les
      viewers, et les personnes qui aiment les speedrun.
    </p>
    <p id="0cb26d60-712d-44a1-9dde-e9ca234598d0" className="">
      Le jeu a pour but de relever des défis avec des personnes pour finir le
      jeu le plus vite possible.
    </p>
    <p id="28ce784c-17fc-4438-9c21-d5e9dfb3f54c" className="">
      Mise en place d’une Intelligence Artificielle pour les Boss du jeu. Cela
      permettra d’applique une tactique différente selon le comportement du
      Boss.
    </p>
    <p id="7982cf40-bf57-47db-855c-ea7056bf0f68" className="">
      Mise en place des différentes routes API pour les parties. Les noms d’URL
      seront les noms des rooms auquels les invités pourront rejoindre la
      partie.
    </p>
    <p id="e3dd0bbd-de99-49cd-a884-ee68c8a759b1" className=""></p>
    <h2
      id="9e11ac98-a058-4872-a75e-267bc25e72e5"
      className="block-color-purple_background"
    >
      <strong>GAMEPLAY</strong>
    </h2>
    <p id="21c15de5-f041-4f47-a652-87d4ed38c59b" className=""></p>
    <p id="27672b36-009c-4acb-86c5-9b3e74cf7ae2" className="">
      Tous les personnages utilisent la combinaison des touches directionnelle
      pour se déplacer.
    </p>
    <p id="3e7ed91b-ab59-4462-805e-15fa1c0c4ddd" className="">
      Sauter en utilisant la barre d’espace
    </p>
    <p id="32ffbe82-5c88-41d4-8aa8-b11011b41bf1" className="">
      La combinaison des touches AZE permette l’interaction dans le jeu:
    </p>
    <p id="461a4d58-ebb3-4a20-8616-2ded1a59829c" className="">
      ‘A’ est l’attaque primaire
    </p>
    <p id="da8ac642-d3a9-4c88-b6f3-545b701b3de2" className="">
      ‘Z’ est l’attaque secondaire qui est la spécialité du personnage
    </p>
    <p id="5c6f6f68-6479-407a-a63d-2cc9f2675369" className="">
      ‘E’ est la touche d’action qui permet d’interagir avec les éléments du jeu
    </p>
    <p id="4bf36200-1f2e-46e5-a0e0-8da9e23ca28c" className="">
      Les personnages sont des steameurs de la plateforme Twitch, parmi eux :
    </p>
    <p id="5e53efaf-d1f2-4649-a6e4-1183b2a0ea8a" className=""></p>
    <h2 id="f5de2b0f-4c2b-4fdc-a109-4fb1ffd53e6d" className="block-color-teal">
      <span style={{ borderBottom: "0.05em solid" }}>
        Fakhear qui fait des lives principalement de dessin et de jeux vidéo.
      </span>
    </h2>
    <ul
      id="3131242d-df06-4408-87aa-02bf8d2ba651"
      className="block-color-teal bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Son personnage maîtrise le corps-à-corps, armé de ses poings et pieds et
        d’un corps robuste.
      </li>
    </ul>
    <ul
      id="fd9668c6-de6e-4cd8-92f8-1ef177b7c4c1"
      className="block-color-teal bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L&apos;attaque primaire : Straight lead qui consiste à lancer le poing vers
        l’avant tout en avançant.
      </li>
    </ul>
    <ul
      id="bd227034-e228-46a4-a772-0ce6dc71d724"
      className="block-color-teal bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque secondaire : Combo qui consiste à lancer 3 coups
      </li>
    </ul>
    <p id="cd41d7b9-9661-4508-a3c3-54ebb2992e8a" className=""></p>
    <h2 id="969907b8-9152-4f6e-a46b-92a4b299ba97" className="block-color-brown">
      <span style={{ borderBottom: "0.05em solid" }}>
        Huzounet fait des lives principalement de jeu vidéo Dofus.
      </span>
    </h2>
    <ul
      id="25b0eb4a-1f2e-4798-9102-44452966f1b0"
      className="block-color-brown bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Son personnage maitrise l’attaque à distance grâce à l’art du Mytho no
        jutsu.
      </li>
    </ul>
    <ul
      id="d78cda82-326a-4bc1-9d77-76722bb57ac3"
      className="block-color-brown bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque primaire : lance un Kunai
      </li>
    </ul>
    <ul
      id="1e0f096a-f551-4bc5-943a-62cb28c0810f"
      className="block-color-brown bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque secondaire : technique secrète du Mytho no jutsu qui consiste
        à lancer une boule d’énergie. L’ utilisateur devra maintenir la touche.
      </li>
    </ul>
    <p id="37db817d-64a0-463c-b248-43c6511e0189" className=""></p>
    <h2
      id="2445a212-a8e7-406f-bf26-fb9c5da40a01"
      className="block-color-yellow"
    >
      <span style={{ borderBottom: "0.05em solid" }}>
        Akhizonah fait des lives Dofus, discussions et des jeux casuals
      </span>
    </h2>
    <ul
      id="fe38bbc7-a96d-42f5-afb7-622d5704e8e3"
      className="block-color-yellow bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Son personnage maîtrise l’art de l’explosion grâce à ça connaissance de
        la poudre.
      </li>
    </ul>
    <ul
      id="51f632f4-5066-4ba8-9135-dbc64dd1c7cb"
      className="block-color-yellow bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque primaire : attaque au couteau
      </li>
    </ul>
    <ul
      id="8f463aa0-877c-476e-94e3-0664c92b5581"
      className="block-color-yellow bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque secondaire : pose une bombe qui s’active
      </li>
    </ul>
    <p id="c70513ab-2db0-4e4d-aa52-e4aa919a365c" className=""></p>
    <h2
      id="cd37cd78-953f-4ce5-907b-811ae8f14d1f"
      className="block-color-purple"
    >
      <strong>
        <span style={{ borderBottom: "0.05em solid" }}>
          Osmosiscoop fait des lives de jeux vidéo divers
        </span>
      </strong>
    </h2>
    <ul
      id="ae31b2c9-5ac4-4448-b5c1-4a9ed00e7478"
      className="block-color-purple bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Son personnage maîtrise l’art du soin grâce à ses pratiques illégales
        sur des être vivants.
      </li>
    </ul>
    <ul
      id="4d0789ee-4540-440a-af9d-6284cb8e3c06"
      className="block-color-purple bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque primaire : attaque avec une seringue au corps-à-corps
      </li>
    </ul>
    <ul
      id="a11f2264-314d-4611-9482-6a610ad95784"
      className="block-color-purple bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        L’attaque secondaire : soigne un allié le piquant
      </li>
    </ul>
    <p id="5e5e6208-10a3-423d-af81-8a2626797e78" className=""></p>
    <h2
      id="82aac4bd-e36f-48fe-9128-b917f7edc520"
      className="block-color-blue_background"
    >
      <strong>CLASSEMENT</strong>
    </h2>
    <p id="61e40774-23f7-4c6f-95f1-71c201b24eb7" className="">
      Mise en place d’un fichier qui contiendra les classements selon le nombre
      de joueurs
    </p>
    <h1 id="1abb9c8d-59a5-4710-8da7-6b21b98ae769" className="">
      Présentation de l’équipe{" "}
    </h1>
    <div id="d44b7e3b-4e08-4856-bc61-0837833c5a30" className="column-list">
      <div
        id="fe3f8dde-4678-4260-9aea-59d1618f3a4c"
        style={{ width: "50.00000000000002%" }}
        className="column"
      >
        <figure id="080cb1fb-e96b-404e-9b4d-136f3f9f5bae" className="image">
          <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/timothee.hennequinepitech.eu.jpg">
            <img
              style={{ width: 120 }}
              src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/timothee.hennequinepitech.eu.jpg"
            />
          </a>
          <figcaption>
            {" "}
            Timothée Hennequin (chef de projet &amp; développeur)
          </figcaption>
        </figure>
      </div>
      <div
        id="83447167-c327-497b-a950-8f411985aeff"
        style={{ width: "50%" }}
        className="column"
      >
        <figure id="7a5a72fb-d1ea-4852-b652-307c3df612d6" className="image">
          <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/MicrosoftTeams-image.png">
            <img
              style={{ width: 144 }}
              src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/MicrosoftTeams-image.png"
            />
          </a>
          <figcaption>
            {" "}
            David Bui (Character designer &amp; développeur)
          </figcaption>
        </figure>
      </div>
    </div>
    <ul id="bcbb0471-565f-4833-abd7-efe623b420f9" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <em>
          <strong>
            Pourquoi être seul ou, à l’inverse, ne pas le rester ?
          </strong>
        </em>
        <p id="cbdde767-961c-4eeb-89f6-bfbb4b49393f" className="">
          Nous avons choisi de faire ce projet à deux car nous avons l’habitude
          de collaborer ensemble sur les différents projets menés dernièrement
          qui c’est toujours bien réalisé
        </p>
      </li>
    </ul>
    <ul id="cf1c5110-ff82-4df5-9b4b-72b16809eb61" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <em>
          <strong>Qui va participer activement à notre projet ?</strong>
        </em>
        <p id="ab45394e-3377-4483-8e49-3763a6d64f02" className="">
          Nous allons tous les deux participer activement au projet
        </p>
      </li>
    </ul>
    <ul id="120e2f51-2b90-49b0-bec8-fc23af04aba4" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <em>
          <strong>Quelles sont les valeurs communes que vous partagez ?</strong>
        </em>
        <p id="0b089edc-e6a0-4f15-b029-db06e56c40b5" className="">
          Les jeux vidéo, et la programmation sont nos valeurs communes
        </p>
      </li>
    </ul>
    <ul id="1dfa5016-e308-4b88-9f94-731e7ee48bd4" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <em>
          <strong>Quels sont les profils des membres de votre équipe ?</strong>
        </em>
        <p id="11104995-72ff-46ee-8eee-33f2eeda4c16" className="">
          David à une affinité pour le back-end en programmation et le dessin
        </p>
        <p id="9e376e3a-bfd5-4754-98a2-9b02d304dfdc" className="">
          Timothée a une affinité par le côté front-end, et est à l’aise avec
          javascript
        </p>
      </li>
    </ul>
    <ul id="43115ab2-651b-4ba9-90ee-080b61f9cfbb" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <em>
          <strong>
            Quelles sont les compétences et les complémentarités de chaque
            membre ?
          </strong>
        </em>
        <p id="95bb002d-257e-40ce-af46-e793cb10982b" className="">
          David est à l’aise en communication, aime dessiner, sociable il va
          facilement vers les gens. Il possède une bonne logique pour résoudre
          les problèmes de codes.
        </p>
      </li>
    </ul>
    <ul id="7775ea48-50f2-4167-9455-793a903f7d51" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Timothée à l’aise en javascript , trouve l’information rapidement,
        connaissance dans l’infra, cherche au-delà de ce qui est demandé, UX, à
        l’affut des nouvelles technologies web
      </li>
    </ul>
    <ul id="1bba319c-ed02-4309-85d3-d17784ab1640" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <em>
          <strong>
            Comment sont répartis les pouvoirs et les tâches au sein de l’équipe
            ?
          </strong>
        </em>
      </li>
    </ul>
    <ul id="6f775de5-7e6d-491f-914f-6542edf848ee" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Le travail sera partagé selon les affinités de chacun dans le domaine
        favori tout en étant constament à jour sur les problèmes de l’autre et
        ses besoin à travers des RDV régulier
      </li>
    </ul>
    <p id="0395bd97-c1f5-44b1-84c6-3fddad17c021" className=""></p>
    <p id="c9889eaa-3757-4be9-9723-e4274d3f0a22" className=""></p>
    <p id="3e8ca9e1-471d-48ae-9103-bca76057c0cf" className=""></p>
    <h1 id="c2b76c15-bbf9-4b37-b130-46a1be300bad" className="">
      <span style={{ borderBottom: "0.05em solid" }}>
        <strong>Marketing</strong>
      </span>
    </h1>
    <h1 id="698795b3-afde-4354-8a5a-cc8fc448df35" className="">
      Analyse de notre cible
    </h1>
    <p id="5ac13d63-76f9-4457-a6e7-7edcf44963a1" className="block-color-teal">
      <strong>Cible</strong> : Les internautes.
    </p>
    <p id="b736436d-0e5f-4afa-be34-6d14621ca9a8" className=""></p>
    <p id="0afafe55-11f6-4ff6-bdbb-54ebe7a266b4" className="block-color-red">
      <strong>Problématique :</strong>
    </p>
    <p id="992f7244-7866-43ee-9eb4-e7903f92253f" className="">
      Proximité et interaction directe entre le streamer et les viewers.{" "}
    </p>
    <p id="05adf587-c005-4be3-a956-b8d2ad28b53a" className="">
      Les viewers ne peuvent que communiquer par écrit et par des commandes qui
      permettent de créer des évènements sur le live.{" "}
    </p>
    <p id="cb2a2cc6-edde-44bd-852a-25dd4308ee40" className="">
      Pour pouvoir jouer avec leurs streamers il faut parfois des conditions :{" "}
    </p>
    <ul id="c15b0c50-135d-4cd6-ba39-60f1e69f2ecc" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>le jeu ( acheté)</li>
    </ul>
    <ul id="e626b4e0-ba61-4bc5-9eaa-7be4412d99c9" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>des mises à jour</li>
    </ul>
    <ul id="a0875bac-aaf6-4909-90f1-8562bad0724e" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Pc capable de jouer à tel jeu ( pas accessible sur Linux ou Window ou
        Mac , pc qui n’est pas assez performent){" "}
      </li>
    </ul>
    <p id="a9a79a2c-55de-4e92-a62f-b92cff4a1f2f" className="">
      {" "}
    </p>
    <p id="887753c9-acdf-4130-a4dd-beaa9a02fbbd" className=""></p>
    <p id="d03114be-138e-4958-8593-0c298cb4244b" className="block-color-blue">
      <strong>Nos Avantages :</strong>
    </p>
    <ul id="9b1836cc-bb53-4431-ad84-84b6a71451bc" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        pas besoin d’acheter, de télécharger le jeu ou de créer un compte, pas
        besoin d’un Pc puissant, fonctionnement sur Linux, Window ,Mac ce qui
        permet d’avoir une accessibilité au jeu pour les streameurs, viewers et
        joueurs.
      </li>
    </ul>
    <ul id="cf4c4a3f-779f-4a41-b961-d0ee6f61d4ac" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Jeu spécialement speedrun en collaboration
      </li>
    </ul>
    <ul id="97952903-0504-41d3-9800-1833664b544f" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Défi entre streamers</li>
    </ul>
    <ul id="db5d589e-5e15-45c0-b210-214edc02d3f1" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Jeu d’actualité</li>
    </ul>
    <ul id="87609f02-b474-458c-98af-eac2cc8d9dde" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Pour les personnes qui font des jeux communautaires en live
      </li>
    </ul>
    <h1 id="b2a93cf4-214c-4886-88ce-5df09a98e6dc" className="">
      Analyse de notre concurrence:
    </h1>
    <ul id="24c12db0-2674-4e3c-8223-27c310db8c58" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Ghostrunner</strong>
      </li>
    </ul>
    <ul id="a73c310b-cbc1-408c-8cab-995ccf36a656" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Streamraiders</strong>
      </li>
    </ul>
    <ul id="6e3de31b-27de-4b2b-a41a-3cda7dc6b0f4" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Twitch Plays Pokémon</strong>
      </li>
    </ul>
    <ul id="3a60b84a-abe2-4957-b558-7bbf7fecf4bd" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Among us</strong>
      </li>
    </ul>
    <ul id="db895705-6931-41d1-8a71-61222b8959bc" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Mario</strong>
      </li>
    </ul>
    <ul id="659fefbc-0c45-432a-b810-36a984de953f" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Gartic phone</strong>
      </li>
    </ul>
    <ul id="3accc705-0f07-4caa-ae63-c8b4f2a97908" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>crowdcontrol</strong>
      </li>
    </ul>
    <ul id="0a6f64a6-aea4-4cba-89e8-27cabe5737f6" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Tomb rider</strong>
      </li>
    </ul>
    <ul id="55e45afb-6234-4b72-bcff-091713e66b81" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>RESIDENT EVIL</strong>
      </li>
    </ul>
    <ul id="ca113c35-9c1c-47ab-9027-a38343881ffe" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>JEU RETRO</strong>
      </li>
    </ul>
    <ul id="f3b5c60e-9c6d-4e54-a483-8c95a6486fa8" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>THE LEGENDS OF ZELDA</strong>
      </li>
    </ul>
    <ul id="6421525b-b541-4f30-82de-3141b97f056a" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>FINAL FANTASY</strong>
      </li>
    </ul>
    <ul id="b2682081-a2c4-44d0-a64b-4bb4f5fb37ad" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>METROID</strong>
      </li>
    </ul>
    <ul id="55a39de4-411f-4e55-a52f-7c4d1aaf8a2c" className="bulleted-list">
      <li style={{ listStyleType: "disc" }} />
    </ul>
    <h2 id="699e21c4-d63a-47d5-844d-fd3072501d28" className="block-color-red">
      <strong>Jeux io</strong>
    </h2>
    <ul id="1c74379b-85a2-4cd3-87a8-82faeb6eee83" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Agar.io</strong>
      </li>
    </ul>
    <ul id="21e4ca21-6b17-4d41-a2c2-88b1794e4bf8" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Slither.io</strong>
      </li>
    </ul>
    <ul id="76e9fff4-09a7-479e-b483-db586a80953c" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Diep.io</strong>
      </li>
    </ul>
    <ul id="1da0a0d5-b80f-4491-a2f3-f16dc0138823" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Tetr.io</strong>
      </li>
    </ul>
    <ul id="6dbfdcf6-5f89-4bca-9d66-d42b8d200278" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Skribbl.io</strong>
      </li>
    </ul>
    <ul id="43efe8ec-ba00-41d0-9ce4-5fc7b455ece6" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <strong>Krunker.io</strong>
      </li>
    </ul>
    <p id="bbc48d90-2dbf-4d32-ab3e-ba8ea8e8d35f" className=""></p>
    <h1 id="44a3ecd5-ccec-4cec-a435-ac12966991b4" className="">
      Positionnement par rapport à notre concurrence
    </h1>
    <p id="e7bdb809-4b0a-4d7c-9ed9-b6e17583da54" className=""></p>
    <div
      id="51360029-102e-4236-8830-6bb24ed39bac"
      className="collection-content"
    >
      <h4 className="collection-title">
        Tableau de positionnement par rapport à notre concurrence
      </h4>
      <table className="collection-content">
        <thead>
          <tr>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Nom
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Point commun
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Avantage
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesTitle"
                >
                  <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z" />
                </svg>
              </span>
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          <tr id="15d4c2c5-675b-42c7-a3e6-a8301a4b4b80">
            <td className="cell-{KNG">Resident Streamer</td>
            <td className="cell-fBDZ">
              Jeu combat 2D multijoueur, gratuit,&nbsp; Speedrun
            </td>
            <td className="cell-it}N">
              Gratuit, en ligne, compte non nécessaire, jouable
              directement,&nbsp; Personnage streamer
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/15d4c2c5675b42c7a3e6a8301a4b4b80">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="166c4976-5e64-4605-bd9c-ca7b23a9f082">
            <td className="cell-{KNG">Mario</td>
            <td className="cell-fBDZ">
              Jeu multijoueur 2D, saut, boss, plateforme
            </td>
            <td className="cell-it}N">Connu sur pc, playstation, mobile</td>
            <td className="cell-title">
              <a href="https://www.notion.so/166c49765e644605bd9cca7b23a9f082">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="e6fa55cd-3173-4bd7-9dd5-29e95af8fe4c">
            <td className="cell-{KNG">Sketch&nbsp;</td>
            <td className="cell-fBDZ">
              Jeu multijoueur, gratuit et pas besoin de télécharger
            </td>
            <td className="cell-it}N">
              Connu sur internet et même pour les joueurs casuals
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/e6fa55cd31734bd79dd529e95af8fe4c">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="48971d1e-2bea-4ff0-b00f-70ba0e266a16">
            <td className="cell-{KNG">Gartic phone&nbsp;</td>
            <td className="cell-fBDZ">
              Jeu multijoueur, gratuit et pas besoin de télécharger&nbsp;
            </td>
            <td className="cell-it}N">
              Connu sur les internets et même pour les joueurs casuals&nbsp;
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/48971d1e2bea4ff0b00f70ba0e266a16">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="e0170965-31c0-4dad-b538-71b128050e0c">
            <td className="cell-{KNG">TOMB RIDER</td>
            <td className="cell-fBDZ">Souvent utilisé comme speed run</td>
            <td className="cell-it}N">Notoriété, 3D</td>
            <td className="cell-title">
              <a href="https://www.notion.so/e017096531c04dadb53871b128050e0c">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="4f25e109-5a4c-4040-a6fd-e9fd4ef18009">
            <td className="cell-{KNG">MARIO</td>
            <td className="cell-fBDZ">
              Souvent utilisé comme speed run, jeu 2D avec des boss, plateforme
            </td>
            <td className="cell-it}N">Notoriété 2D/3D</td>
            <td className="cell-title">
              <a href="https://www.notion.so/4f25e1095a4c4040a6fde9fd4ef18009">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="c3af2bfe-8f9f-418b-9885-b200a670b5a9">
            <td className="cell-{KNG">RESIDENT EVIL</td>
            <td className="cell-fBDZ">
              Souvent utilisé comme speed run, selon la version de Resident evil
            </td>
            <td className="cell-it}N">Notoriété, jeu de tir, jeu d’horreur</td>
            <td className="cell-title">
              <a href="https://www.notion.so/c3af2bfe8f9f418b9885b200a670b5a9">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="dd5b905b-0195-4143-8992-b2bbca7c407f">
            <td className="cell-{KNG">JEU RETRO</td>
            <td className="cell-fBDZ">
              Souvent utilisé comme speed run, jeu 2D, plateforme
            </td>
            <td className="cell-it}N">Notoriété</td>
            <td className="cell-title">
              <a href="https://www.notion.so/dd5b905b019541438992b2bbca7c407f">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="3e0a9103-6386-42c0-92e7-ab42f45a8417">
            <td className="cell-{KNG">THE LEGENDS OF ZELDA</td>
            <td className="cell-fBDZ">Souvent utilisé comme speed run,</td>
            <td className="cell-it}N">
              3D, Notoriété tournoi en speed run, monde ouvert
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/3e0a9103638642c092e7ab42f45a8417">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="82def73a-682e-4807-aa9a-11059404f2f4">
            <td className="cell-{KNG">FINAL FANTASY</td>
            <td className="cell-fBDZ">Souvent utilisé comme speed run, 2d</td>
            <td className="cell-it}N">Notoriété, RPG tour par tour</td>
            <td className="cell-title">
              <a href="https://www.notion.so/82def73a682e4807aa9a11059404f2f4">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="ade76ae3-1a8d-4f01-80d6-1acc4ceaf665">
            <td className="cell-{KNG">METROID</td>
            <td className="cell-fBDZ">
              Souvent utilisé comme speed run, 2d, plateforme&nbsp;
            </td>
            <td className="cell-it}N">Metroidvania, notoriété</td>
            <td className="cell-title">
              <a href="https://www.notion.so/ade76ae31a8d4f0180d61acc4ceaf665">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="8bb476f0-ef6b-4c37-a9c7-7e9f1522c64e">
            <td className="cell-{KNG">
              <strong>Agar.io</strong>
            </td>
            <td className="cell-fBDZ">
              Multijoueur, sur le web gratuit, pas besoin de
              téléchargement&nbsp; Jouable directement&nbsp;
            </td>
            <td className="cell-it}N">MMO, notoriété</td>
            <td className="cell-title">
              <a href="https://www.notion.so/8bb476f0ef6b4c37a9c77e9f1522c64e">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="4d47dc0d-5da4-4364-ace8-3e4c49b6fdc7">
            <td className="cell-{KNG">Tetr.io</td>
            <td className="cell-fBDZ">
              Possibilité d’améliorer son classement&nbsp; Jouable
              directement&nbsp; Empiler et effacer le plus de blocs en un
              minimum de temps.&nbsp;
            </td>
            <td className="cell-it}N">Notoriété, reprend le jeu tétris</td>
            <td className="cell-title">
              <a href="https://www.notion.so/4d47dc0d5da44364ace83e4c49b6fdc7">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="3c45cce1-7b26-4167-aaec-d02e11bdceda">
            <td className="cell-{KNG">Krunker.io&nbsp; &nbsp;</td>
            <td className="cell-fBDZ">
              Jouable directement&nbsp; En ligne sur le web
            </td>
            <td className="cell-it}N">
              Jeu FPS 3D, mélange Minecraft/call of duty,&nbsp; Déplacement et
              accélération
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/3c45cce17b264167aaecd02e11bdceda">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="f74ed6a4-ec6e-4fc0-8423-777f11cfae5e">
            <td className="cell-{KNG">Diep.io&nbsp;</td>
            <td className="cell-fBDZ">
              Jeux basés sur l’équipe,&nbsp; Stratégie,&nbsp; Quelques
              partenaires en plus ouvrent un nouveau niveau de coordination.
            </td>
            <td className="cell-it}N">
              Améliorer leurs véhicules pour les faire bouger plus vite, frapper
              plus fort et devenir plus tanky
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/f74ed6a4ec6e4fc08423777f11cfae5e">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="705e1d90-93e2-46a8-9f0d-9629bf772f05">
            <td className="cell-{KNG">Ghostrunner</td>
            <td className="cell-fBDZ">
              Speedrunner, jeux d’actualité( pas rétro)
            </td>
            <td className="cell-it}N">3D</td>
            <td className="cell-title">
              <a href="https://www.notion.so/705e1d9093e246a89f0d9629bf772f05">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="a9c5d380-40e1-46cd-a79b-f5a510bc6a9b">
            <td className="cell-{KNG">crowdcontrol</td>
            <td className="cell-fBDZ">2D</td>
            <td className="cell-it}N">
              60 jeux, 3D, jeux de notoriétés, interaction viewers avec une
              commande&nbsp;
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/a9c5d38040e146cda79bf5a510bc6a9b">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="7a9ddf44-582a-4dcb-a035-28b8eee16169">
            <td className="cell-{KNG">Streamraiders&nbsp;</td>
            <td className="cell-fBDZ">2D</td>
            <td className="cell-it}N">
              Jeux speciale pour twitch les viewers peuvent aider leurs
              streamers tous les 5mins
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/7a9ddf44582a4dcba03528b8eee16169">
                Untitled
              </a>
            </td>
          </tr>
          <tr id="e51a63ae-5452-4d6e-b437-3f263ba3a870">
            <td className="cell-{KNG">Twitch Plays Pokémon&nbsp;</td>
            <td className="cell-fBDZ">
              2D, Jeu{" "}
              <a href="https://fr.wikipedia.org/wiki/Crowdsourcing">
                collaboration
              </a>
            </td>
            <td className="cell-it}N">
              jeu vidéo{" "}
              <a href="https://fr.wikipedia.org/wiki/Pok%C3%A9mon_Rouge_et_Bleu">
                <em>Pokémon </em>
              </a>
              en récupérant les commandes données par les{" "}
              <a href="https://fr.wikipedia.org/wiki/Utilisateur_(informatique)">
                utilisateurs
              </a>{" "}
              dans une fenêtre de{" "}
              <a href="https://fr.wikipedia.org/wiki/Messagerie_instantan%C3%A9e">
                messagerie instantanée
              </a>
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/e51a63ae54524d6eb4373f263ba3a870">
                Untitled
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p id="1c3962ed-7c4d-4fe5-bee8-ee6ca188bb98" className=""></p>
    <h1 id="8b212dc7-f3e9-4838-8ba1-888fa36ccc64" className="">
      Promotion / Communication
    </h1>
    <p id="2964224e-13ed-49e9-b41b-b583a7367c01" className="">
      <strong>
        <em>Comment allons-nous faire la promotion de notre solution ?</em>
      </strong>
    </p>
    <p id="56fff17a-eff0-4a59-a011-4f65d5681132" className=""></p>
    <p id="20384f06-e193-446d-8221-89a8cf94082a" className="">
      Grâce au réseaux sociaux (twitter, Instagram, Facebook)
    </p>
    <p id="1a68b050-5263-4cae-9420-fd8e4726a0bc" className="">
      Avec des posts pour dire l’avancement du projet sur twitter avec des
      hasthags #gamedev #gamedevelopment #game #indie #speedrun #2D #streamer
      #phaser #javascript #typescript #multijoueur #boss
    </p>
    <p id="f5fb0ba4-6af4-4bfc-a105-ea00e8cb945d" className="">
      <a href="http://speedrun.com/">Speedrun.com</a> site dédié au speedrun
    </p>
    <p id="8d3d7c77-2208-4384-8b83-a0e64f432e0c" className="">
      Sur instagram aussi des posts avec les mêmes hasthags et rajouter des
      autres developpeurs de jeux indépendants en amis.
    </p>
    <p id="aad6902f-fd25-4094-b1f0-b79b9b44086f" className="">
      Youtube pour mettre des vidéos du jeu.
    </p>
    <p id="d7f0098a-961d-4b2d-8dcb-15f813a7820c" className="">
      Ensuite sur Facebook faire une page du jeu et faire connaitre le jeu dans
      des groupes de jeux.
    </p>
    <p id="335dc9d8-81f5-4884-b2af-9d3df59e2f10" className="">
      Amis proches, personnes de la promotion.
    </p>
    <figure id="b7a007f9-cc8b-4b61-a682-1c550602d392" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/facebook.png">
        <img
          style={{ width: 1848 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/facebook.png"
        />
      </a>
    </figure>
    <figure id="f7c4598c-ae58-4623-9bb2-913776e210b7" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Screenshot_from_2022-04-05_12-07-15.png">
        <img
          style={{ width: 1849 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Screenshot_from_2022-04-05_12-07-15.png"
        />
      </a>
    </figure>
    <figure id="9013eca7-c399-4415-b8b4-3b7b2936f367" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/277934342_966629650691787_469874799786315837_n.jpg">
        <img
          style={{ width: 1080 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/277934342_966629650691787_469874799786315837_n.jpg"
        />
      </a>
    </figure>
    <h1 id="bcd0b38e-32c2-4fde-af8e-b7f31c012d02" className="">
      Argumentaire de vente:
    </h1>
    <p id="2bf28ebd-3fd8-4ffb-bf70-99dd816ba490" className=""></p>
    <p id="26d6e76e-f893-4c28-a0df-4054e3110318" className="">
      <strong>Problème :</strong>
    </p>
    <div className="indented">
      <p id="b23202d5-ec35-4a37-b212-c4bf2805085e" className="">
        Aujourd’hui il existe de nombreux internautes à qui la possibilité
        d’interagir, de s’amuser et de participer directement entre les
        streamers et les viewers, se fait ressentir.{" "}
      </p>
      <p id="5bc3f27c-a38e-483c-a060-5b17b3c1025c" className="">
        Les viewers ne peuvent que communiquer ou interagir par écrit et par des
        commandes qui permettent de créer des évènements sur le live.
      </p>
      <p id="ee8f5b72-f791-4c7e-bb3d-9754326cbeff" className="">
        Pour pouvoir jouer avec leurs streamers il faut parfois des conditions :
      </p>
      <ul id="014ae4e1-eb64-47a6-8bfc-8a318df8ce52" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>le jeu (acheté)</li>
      </ul>
      <ul id="7cc7a55d-893e-4782-aa58-8154cbe420ec" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>des mises à jour</li>
      </ul>
      <ul id="4c25f333-ccc1-47f5-9049-78a34e4baec1" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          PC capable de jouer à tel jeu (compatibilité sur Linux, Window, Mac,
          PC qui n’est pas assez performant){" "}
        </li>
      </ul>
      <p id="2e48e269-161a-4e63-be9e-a4a6656fcdd9" className="">
        Nous avons interrogé un certain nombre de streamer/viewers et nous avons
        constaté que l’idée de mettre en place un meilleur rapprochement entre
        streamers et viewers à travers un jeu était une bonne idée.{" "}
      </p>
      <p id="893c6ce5-0e45-41d7-8766-f3feadd257ef" className=""></p>
    </div>
    <p />
    <p id="702b26f0-8316-44c2-815b-aa12995929ed" className="">
      <strong>Solution</strong>
    </p>
    <div className="indented">
      <p id="b43824f4-499a-4a98-ba62-f585586480ed" className="">
        La création d’un jeu multijoueur auquel il serait possible de jouer en
        collaboration autour d’un jeu amusant, challengeant , accessible
        facilement et rapidement à tous , qui ne nécessite pas de prérequis au
        niveau du matériel. un jeu amusant, challengeant et compétitif, et
        rapide avec les autres pourrait être là solution permettant de réunir
        les streamers et viewers directement à travers le jeu.
      </p>
    </div>
    <p />
    <p id="8ae4d6b9-b4c6-47f6-8bb1-4beb67bd5e95" className="">
      Décrivez les mesures qui doivent être prises pour relever le défi.
    </p>
    <p id="c2ddba94-e152-42bc-a4d9-54d1a8f9fd28" className="">
      <strong>Proposition de valeur</strong>
    </p>
    <div className="indented">
      <ul id="d629640e-c437-4c8c-a637-482ac6575e9e" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Possibilité de jouer un streamer qui vous plaît ce qui donne envie de
          tester ce personnage. Aux côtés d’amis, de viewers ou de vos streamers
          préférés
        </li>
      </ul>
      <ul id="e7250d56-5339-41a2-91ba-6f1451de56c0" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Jeu spécialement pour le speed run en collaboration avec des
          personnages steameur, ce qui en fait un jeu unique. Ce qui donne la
          possibilité aux joueurs de tester de nouvelle chose.
        </li>
      </ul>
      <ul id="1ff0149c-7f65-47ac-b034-3c3986a82660" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          pas besoin d’acheter, de télécharger le jeu ou de créer un compte, pas
          besoin d’un Pc puissant, fonctionne sur Linux, Mac, Window ce qui
          permet d’avoir une accessibilité au jeu pour streamer, viewers et
          joueurs.
        </li>
      </ul>
      <ul id="2c8b05dc-5eeb-4cc6-bfc9-7ecb4e0e0e64" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>Défi entre streamers</li>
      </ul>
      <ul id="98d8d30a-c20d-4af3-a28f-45b77a84a5a4" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>Jeu d’actualité</li>
      </ul>
      <ul id="463ff739-01aa-408f-be8f-d7de171c5947" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Pour les personnes qui font des jeux communautaires en live
        </li>
      </ul>
      <p id="0303dc60-9e5c-418d-98f0-3cabc187ba33" className="">
        <strong>Faits et données</strong>
      </p>
      <p id="187b499d-861d-45c3-917d-215e5595846f" className="">
        Nous avons eu des réponses à travers un formulaire envoyé aux streamers
        et viewers auquel les réponses était bénéfique pour ce genre d’idée,
        tant qu’il les points qu’il ont le plus souligné son :
      </p>
      <p id="7a5ccb0c-53eb-4dc6-b01f-114a6be5ea11" className="">
        -Pour les personnes qui font des jeux communautaires en live ça peut
        être cool oui
      </p>
      <p id="5a9c70f9-e055-4d1d-830d-d8a78769b350" className="">
        -Oui si tu veux un chat avec une ambiance collective et des délires
        communs, ça aide
      </p>
      <p id="0fd6a8a9-81a2-496a-bcc3-ef775bf30716" className="">
        -Oui pour le jeu
      </p>
    </div>
    <p />
    <p id="b6361765-1d29-450f-af17-5ebcdb6e8499" className=""></p>
    <h1 id="a830af3b-2066-4360-9368-ca69b594a7db" className="">
      <span style={{ borderBottom: "0.05em solid" }}>Technologies</span>
    </h1>
    <p id="b5f7782f-9efb-460d-8ba3-36dbcdbe907a" className="block-color-blue">
      <strong>Phaser 3</strong>: Possède un moteur physique qui permet de gérer
      facilement et de manière réaliste les différents aspects : vitesse d’un
      sprite, accélération, gravitation, collision, rebonds …
    </p>
    <p id="d0604dcd-423f-4aad-82ba-3d2552baca6e" className=""></p>
    <figure id="9dc230fb-44ce-439c-98f2-fdecd8e19cb6" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/phaser.png">
        <img
          style={{ width: 288 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/phaser.png"
        />
      </a>
    </figure>
    <p id="75fff087-b493-45fc-80ec-97d1c88f289d" className=""></p>
    <p id="3393dae5-7a78-4c24-b255-01f57f7c31bd" className="block-color-yellow">
      <strong>Socket.io et ExpressJS</strong> utilisé par l’intermédiaire de{" "}
      <strong>Colyseus</strong> : Permet d’échanger les données rapidement et
      instantanément depuis plusieurs utilisateurs ce qui favorise une meilleure
      configuration pour un jeu multijoueur facilite
    </p>
    <figure id="efa9b3a6-8b25-447f-b48f-c484b45339dd" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/socket.jpg">
        <img
          style={{ width: 384 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/socket.jpg"
        />
      </a>
    </figure>
    <figure id="aa72501f-1660-4e1c-8a3b-d12bed663141" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/colypses.png">
        <img
          style={{ width: 303 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/colypses.png"
        />
      </a>
    </figure>
    <figure id="81e619b1-d408-4a77-848b-f490593a5ec5" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/expressjs.png">
        <img
          style={{ width: 384 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/expressjs.png"
        />
      </a>
    </figure>
    <p id="c83eda4f-c9ff-49ff-9917-ce00435667c0" className=""></p>
    <p id="57db8616-48db-485a-a47c-d17d9e84d5b8" className="block-color-teal">
      <strong>NodeJS</strong> coté backend avec Phaser 3 en un affichage sans
      tête (Headless renderer)
    </p>
    <p id="ebffa7ff-f473-4a8d-9bd7-65628aa195b5" className="block-color-teal">
      Développement rapide avec une implémentation faisant autorité dès le
      départ. Cela permet de créer facilement un jeu avec une boucle/logique de
      jeu côté serveur pour fournir des mécanismes amusants et éviter les hacks
      basés sur le client.
    </p>
    <p id="a6fe5e53-6899-461b-88f9-61a1ff522fe8" className=""></p>
    <figure id="d5dd5cd2-7301-4360-a458-90ca04a9fd49" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/nodejs.png">
        <img
          style={{ width: 384 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/nodejs.png"
        />
      </a>
    </figure>
    <p id="79e7149b-3553-40fd-93ca-e5bee4ca7a19" className=""></p>
    <p id="703a912d-4aa9-4551-9a27-a20d628bfe3d" className="block-color-orange">
      <strong>HTML5</strong> : accessibilités en ligne sur son navigateur web
      favoris
    </p>
    <p id="6148a6f3-4394-424a-a070-c1f272489467" className=""></p>
    <figure id="68664acd-f9c4-48e7-a5cc-96d00bc9d7f4" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/HTML5.png">
        <img
          style={{ width: 192 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/HTML5.png"
        />
      </a>
    </figure>
    <p id="9a2d6720-ee5f-4cd7-9b8d-390548977898" className=""></p>
    <p id="98128061-5e71-4099-966d-b3f4c865336d" className="">
      <strong>Github </strong>: est un service web d&apos;hébergement et de gestion
      de développement de logiciels
    </p>
    <p id="b711d02c-31ae-49aa-b55b-aa3fd9f8048c" className=""></p>
    <figure id="4ebcbeba-29b6-4909-93e9-97b62dcad16d" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/github.png">
        <img
          style={{ width: 288 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/github.png"
        />
      </a>
    </figure>
    <p id="ab77e9d1-e079-498c-a444-428162c6e0f8" className=""></p>
    <p id="b5e2a5f4-657b-42ad-97b1-0d8df2ae9b4d" className=""></p>
    <p id="a352adc5-6896-4892-a59b-84fe6d8d025b" className="block-color-brown">
      <strong>Gimp </strong>: est un logiciel libre d&apos;édition et de création
      d&apos;image
    </p>
    <p id="5a3ccb94-b3c3-4ce6-bd66-40d673e32ae2" className="">
      .
    </p>
    <figure id="82e94f7a-13dd-455e-89de-3d6ec38fce1c" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/gimp.png">
        <img
          style={{ width: 288 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/gimp.png"
        />
      </a>
    </figure>
    <p id="8e6ecdb8-4e3a-46b1-9699-8a31ed10c72b" className=""></p>
    <p id="a6c6c51c-4eba-4c5b-a713-ae067a2d9eb9" className="block-color-blue">
      <strong>Canva : </strong>plate-forme de conception graphique qui crée des
      graphiques, des présentations, des affiches, des documents.
    </p>
    <p id="4f3ef192-8b41-4901-8343-2486f9732cf4" className=""></p>
    <figure id="92483be3-e8ae-4ec1-8a0b-c00095f2e0ee" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/canva-logo.png">
        <img
          style={{ width: 400 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/canva-logo.png"
        />
      </a>
    </figure>
    <p id="9afd02f8-4138-4b8d-bfe8-02765e4fee0b" className=""></p>
    <p id="7fa97915-cef4-4656-a440-f2b6c483b0c7" className=""></p>
    <p id="8402a8e2-6d15-43bf-8127-6faac698e706" className="block-color-purple">
      <strong>Figma </strong>: outil de solution en ligne de design d’interfaces
      collaboratif et dynamique,pour une équipe de designers.
    </p>
    <p id="71d14e9d-56aa-45a3-9049-6941c60ce91a" className=""></p>
    <figure id="15330b75-1c32-41ac-aa39-0b3b12b9c0e8" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/figma.png">
        <img
          style={{ width: 480 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/figma.png"
        />
      </a>
    </figure>
    <p id="74c528b1-5b59-416f-bebd-71bb075098c2" className=""></p>
    <p id="14666c28-66d7-4aec-846e-ba3566fb15c7" className="block-color-brown">
      <strong>Notion</strong> : application de prise de notes, de bases de
      données, des tableaux,{" "}
    </p>
    <p id="910d830d-6742-4cb9-ba30-154403013db8" className="block-color-brown">
      de wikis, de calendriers et de rappels.
    </p>
    <p id="e2096ded-73ab-46f9-9e70-afb3cfdf5040" className=""></p>
    <figure id="55202b75-a248-4dd1-acd4-d324b6696250" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/notion.png">
        <img
          style={{ width: 512 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/notion.png"
        />
      </a>
    </figure>
    <h1 id="4919b423-74d2-4b1c-9b1b-fb682cbf7822" className="">
      SEO &amp; Responsive
    </h1>
    <p id="8e8a0717-dcc9-4dcc-b06e-fde9f61fb694" className="">
      Le site sera hébergé sous le domaine{" "}
      <a href="http://resident-streamer.servegame.com">
        <span style={{ borderBottom: "0.05em solid" }}>
          resident-streamer.servegame.com
        </span>
      </a>
    </p>
    <p id="c66cf25d-b204-4942-b7c0-9e00f01d0ca2" className="">
      Visible depuis la recherche google
    </p>
    <p id="b19d41d8-6430-4b56-8b3c-3f0f7a0f29a3" className="">
      Page qui s’adapte à la largeur de l’écran,
    </p>
    <p id="8b5abf67-777f-4ac4-ae09-cab426c69cdd" className="">
      Un jeu uniquement sur PC
    </p>
    <figure id="9d66ae42-f9af-42c6-8858-a19661bc245a" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Capture_dcran_du_2022-04-07_11-14-27.png">
        <img
          style={{ width: 856 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Capture_dcran_du_2022-04-07_11-14-27.png"
        />
      </a>
    </figure>
    <p id="64f4438d-a735-429e-801d-4a9be384c3f0" className="">
      800x400
    </p>
    <p id="21c4a299-49d8-4409-8411-7cb2f9f9e3ef" className=""></p>
    <figure id="677792d1-ffae-4b5f-a6d7-3daf5b699ab7" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Capture_dcran_du_2022-04-07_11-17-38.png">
        <img
          style={{ width: 1112 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Capture_dcran_du_2022-04-07_11-17-38.png"
        />
      </a>
    </figure>
    <p id="5a2e4c52-28d0-42be-8908-b5170eb894e8" className="">
      960x945
    </p>
    <h1 id="681a1ff6-8062-4b36-9bb1-5abfbfbecf9a" className="">
      API
    </h1>
    <p id="1411e9a7-88a6-4d26-b96a-d3106b39924a" className="">
      les Url peuvent être partager pour inviter des gens à la partie
    </p>
    <p id="cd60bd9e-ccae-4626-9726-404dc23db112" className="">
      Il existe deux route principal:
    </p>
    <p id="110f2b91-312a-47d0-b61d-ea2eb5508c42" className="">
      <strong>
        <strong>resident-streamer.servegame.com</strong>
      </strong>
    </p>
    <p id="91c8ef0a-26fd-4e92-aa69-7ea190e30e4d" className="">
      Acceuil du site avec l’affichage des différents salon disponible
    </p>
    <p id="d526ffaa-7e5e-4d03-804d-bcd8c292e637" className="">
      <strong>
        <strong>resident-streamer.servegame.com/:nom-du-lobby</strong>
      </strong>
    </p>
    <p id="310bb4ce-877d-445b-a08e-486c301b73f6" className="">
      :non-du-lobby et le paramètre qui définit la salle ou le jeu se passe
    </p>
    <h1 id="3bd05015-ff5d-455e-9de4-d53136fdd7c4" className="">
      Hébergement
    </h1>
    <p id="55b3fc4f-436b-4d5f-a423-d1d5e6d440c0" className=""></p>
    <p id="8d6bea3b-d227-46c2-ac04-ae5a5ff5535f" className="block-color-pink">
      Raspberry pi dans un un premier puis sur un hébergeur si la capacité n’ai
      pas suffisante
    </p>
    <figure id="f87f5c53-2e79-4eda-846b-1e0b7e225418" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/image.jpg">
        <img
          style={{ width: 1736 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/image.jpg"
        />
      </a>
    </figure>
    <figure id="98cdf6e7-80f2-4679-84b4-a8589c808b39" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/raspberry-pi-logo.jpg">
        <img
          style={{ width: 900 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/raspberry-pi-logo.jpg"
        />
      </a>
    </figure>
    <h1 id="de1ce366-5aa5-4b8b-a744-2df01b7c4f98" className="">
      Sécurité
    </h1>
    <p id="d62e9201-1a41-422b-8d61-dccb1c4217eb" className="">
      C’est une structure protégée car c’est une architecture client- serveur où
      aucune donnée mise à part les touches appuyées est envoyée au serveur.
    </p>
    <p id="eeeaab5a-23cc-496b-970b-4c93895e4fee" className=""></p>
    <h1 id="154b4cc1-ec98-4ea1-876d-c03823c60a7f" className="">
      <span style={{ borderBottom: "0.05em solid" }}>Contenu</span>
    </h1>
    <h2 id="23e79275-67dd-4881-8b17-5565b99c345b" className="">
      Navigation flow
    </h2>
    <p id="774ecd5c-6345-4081-ad35-9e1d5debb139" className="">
      <a href="https://www.figma.com/file/ct2HsaLSEdY4fVbH895FUX/Untitled?node-id=19%3A3">
        https://www.figma.com/file/ct2HsaLSEdY4fVbH895FUX/Untitled?node-id=19%3A3
      </a>{" "}
      (carré graphique)
    </p>
    <figure id="7255ec03-9042-4809-a4a7-074a217d0586" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/navigation_flow.png">
        <img
          style={{ width: 1324 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/navigation_flow.png"
        />
      </a>
    </figure>
    <p id="9ef6ede2-a85d-4299-886c-60a91c0bb799" className=""></p>
    <h2 id="e646def3-1d28-445a-93d2-41a26cca3dd7" className="">
      Types d’utilisateur
    </h2>
    <ul
      id="abeb4ad7-8362-4469-8d02-6837fd354e3b"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Utilisateur qui joue au speed run.
      </li>
    </ul>
    <ul
      id="011c6db3-8592-486d-919d-67d7ed8a157c"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Les personnes qui vont sur Twitch (steameurs, viewers)
      </li>
    </ul>
    <ul
      id="a17ee31a-edb9-4ba0-aea8-795f9b504959"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Les personnes qui aiment la 2D (plateforme).
      </li>
    </ul>
    <ul
      id="1467a478-93b1-405a-abd9-1492241ed6b4"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Utilisateur qui aime jouer en collaboration.
      </li>
    </ul>
    <ul
      id="455a5ef9-87fa-41b2-8df2-34548009a2ce"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Utilisateur <strong>+ 12 ans</strong>.
      </li>
    </ul>
    <ul
      id="8b274511-0ae7-4f86-8624-cf32ac0ab476"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Pour les personnes qui font des jeux communautaires en live
      </li>
    </ul>
    <ul
      id="289d70dd-161f-406f-aad4-207e8336dcd5"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Utilisateur qui ont un Pc peu performance
      </li>
    </ul>
    <ul
      id="e10b238b-e494-4af6-97b3-e2892af96f7d"
      className="block-color-blue bulleted-list"
    >
      <li style={{ listStyleType: "disc" }}>
        Utilisateur qui ont un Linux, Window, Mac
      </li>
    </ul>
    <figure id="b71f4ba6-88d4-4d1c-90a0-d8233b7cc561" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Screenshot_from_2022-04-07_10-19-54.png">
        <img
          style={{ width: 732 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/Screenshot_from_2022-04-07_10-19-54.png"
        />
      </a>
    </figure>
    <h1 id="8e2b01e3-a7b3-40d7-9775-e73ff97bf494" className="">
      <strong>User Stories</strong>
    </h1>
    <p id="6e0c4af2-7438-4d4a-a4c7-0a82e6ec26cd" className="">
      Ici, nous retrouverons tous les scénarios dans lesquelles ses différents
      types d’utilisateurs se retrouveront.
    </p>
    <ul id="834b3e2a-30a4-4654-aabf-57763a052849" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Un/Une streamer lance un live en direct sur une plateforme(twitch) qui
        lancera le jeu et qui invitera ses viewers(les utilisateurs) à rejoindre
        la partie.
      </li>
    </ul>
    <ul id="9312a07c-52ab-43d6-8385-b73274f49763" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Les joueurs qui ont l’habitude de jouer à des speedrun et qui voudront
        changer de jeu pourront tester notre jeu.
      </li>
    </ul>
    <ul id="4d8f5fb0-de2b-409b-b438-ce813eab597a" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Les utilisateurs qui souhaiteront jouer en collaboration pourront jouer
        à notre jeu.
      </li>
    </ul>
    <ul id="cd1810e9-65b4-4f0c-92dd-1b2be7691942" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Ou il est possible des utilisateurs peuvent jouer entre eux.
      </li>
    </ul>
    <p id="294f31cd-b55a-4a7c-86ff-31043f1da8f5" className=""></p>
    <h2 id="8b65f89b-5779-4e95-92f2-883c858055ea" className="">
      <strong>A long terme</strong>
    </h2>
    <p id="ba98d6f4-0546-4002-9f88-481007e9d844" className="">
      Ajouter :{" "}
    </p>
    <p id="abe6536d-0c0a-414a-a850-6dcdc9ae7ba4" className="">
      -nouvelle extension{" "}
    </p>
    <p id="b252c326-b765-4bf0-b00b-d85102e31038" className="">
      -map
    </p>
    <p id="411d1295-8929-4201-b69b-55d5339f5702" className="">
      {" "}
      -nouveaux personnages ( streameurs)
    </p>
    <p id="d7bf8bf9-e261-4999-827d-2bd863f3c804" className=""></p>
    <p
      id="addd5fff-cbba-4409-ba84-0de6850762dd"
      className="block-color-blue_background"
    >
      Les joueurs peuvent revenir sur le jeu pour se surpasser.
    </p>
    <p id="0cf529a0-fe39-4d1a-b98d-9a2d856f9633" className=""></p>
    <p
      id="cb667163-620f-4152-9fc2-23c54607b11b"
      className="block-color-blue_background"
    >
      Relever des défis dans la communauté
    </p>
    <p id="4610cf5f-a6e5-4f94-b37f-9beeac55e05f" className=""></p>
    <h1 id="b66ced59-dc28-4874-aa07-a632b4fcc4ca" className="">
      <span style={{ borderBottom: "0.05em solid" }}>Création</span>
    </h1>
    <h2 id="f2cd08c5-5969-410e-82ab-e19bb3f52de8" className="">
      <strong>
        <strong>Charte graphique &amp; Moodboard</strong>
      </strong>
    </h2>
    <p id="1e6eac7c-c9bc-4374-8bf5-e361c6f833d5" className="">
      <a href="https://www.canva.com/design/DAE6qpa9Fz0/chqpUK671Y5dY8CFHzRMxA/edit?utm_content=DAE6qpa9Fz0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
        https://www.canva.com/design/DAE6qpa9Fz0/chqpUK671Y5dY8CFHzRMxA/edit?utm_content=DAE6qpa9Fz0&amp;utm_campaign=designshare&amp;utm_medium=link2&amp;utm_source=sharebutton
      </a>{" "}
      (canva)
    </p>
    <figure id="57314035-8b92-46de-9812-2acd90ad0bc8" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/1.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/1.png"
        />
      </a>
    </figure>
    <figure id="a6f34bff-cffa-4c29-88b3-d0036d074b2e" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/2.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/2.png"
        />
      </a>
    </figure>
    <figure id="b4b34749-f57d-438f-a04c-028c4debff65" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/3.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/3.png"
        />
      </a>
    </figure>
    <figure id="94c93791-f2e6-4707-bcee-4ed4a50cd34a" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/4.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/4.png"
        />
      </a>
    </figure>
    <figure id="3dc9a74a-ae27-41ac-a7d5-f9a2f5b9c763" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/5.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/5.png"
        />
      </a>
    </figure>
    <figure id="3679ad26-731a-4ff9-ab31-ae4d898aa262" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/6.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/6.png"
        />
      </a>
    </figure>
    <figure id="f74028cf-25d2-4f36-8003-d7aef69abda1" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/7.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/7.png"
        />
      </a>
    </figure>
    <figure id="c1e9fb76-2735-4a13-b40d-ab6e810f2751" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/8.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/8.png"
        />
      </a>
    </figure>
    <figure id="d85bdee7-c700-4a57-89a6-227b2a399b22" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/9.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/9.png"
        />
      </a>
    </figure>
    <figure id="706779e0-2136-4d14-a552-18500905895b" className="image">
      <a href="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/10.png">
        <img
          style={{ width: 500 }}
          src="Cahier%20des%20charges%20080cb1fbe96b404e9b4d136f3f9f5bae/10.png"
        />
      </a>
    </figure>
    <p id="774bfbe9-1cf0-4b92-8f12-da11e9c0f7e9" className=""></p>
    <h2 id="f3640958-2ee0-4fa3-8a97-484fd650f7be" className="">
      <strong>
        <strong>Mockups</strong>
      </strong>
    </h2>
    <p id="b30d3565-0e07-4367-bb02-48b3a1a8f82b" className="">
      <a href="https://www.figma.com/file/ct2HsaLSEdY4fVbH895FUX/Untitled?node-id=0%3A1">
        <strong>
          https://www.figma.com/file/ct2HsaLSEdY4fVbH895FUX/Untitled?node-id=0%3A1
        </strong>
      </a>
    </p>
    <p id="abaf2790-ebea-414d-aca7-81d06e69cad1" className=""></p>
    <h1 id="773ee70b-1eff-464c-b0c8-db469e8992b0" className="">
      <span style={{ borderBottom: "0.05em solid" }}>
        <strong>Contraintes et Temps</strong>
      </span>
    </h1>
    <h1 id="241c3b94-7472-4702-b0ae-39677acb0ec1" className="">
      <strong>
        <strong>Charge horaires estimée</strong>
      </strong>
    </h1>
    <div
      id="95f13b2d-6faa-4678-bba3-975922b14282"
      className="collection-content"
    >
      <h4 className="collection-title" />
      <table className="collection-content">
        <thead>
          <tr>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesTitle"
                >
                  <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z" />
                </svg>
              </span>
              Lundi
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Mardi
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Merc
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Jeu
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Ven
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Sam
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Dim
            </th>
          </tr>
        </thead>
        <tbody>
          <tr id="7ab5207c-92bb-49a6-be61-1fbbe2c8c129">
            <td className="cell-title">
              <a href="https://www.notion.so/7ab5207c92bb49a6be611fbbe2c8c129">
                Untitled
              </a>
            </td>
            <td className="cell-]SiQ" />
            <td className="cell-JlLu" />
            <td className="cell-IBPc">BUI&nbsp; Timothee</td>
            <td className="cell-:^ur">BUI&nbsp; Timothee&nbsp;</td>
            <td className="cell-Ytsi">BUI&nbsp; Timothee&nbsp;</td>
            <td className="cell-HtHm">BUI&nbsp; Timothee&nbsp;</td>
          </tr>
          <tr id="6dfff2ad-8759-42c5-994c-82090c6722d5">
            <td className="cell-title">
              <a href="https://www.notion.so/6dfff2ad875942c5994c82090c6722d5">
                Untitled
              </a>
            </td>
            <td className="cell-]SiQ" />
            <td className="cell-JlLu" />
            <td className="cell-IBPc">19H-22H</td>
            <td className="cell-:^ur">18H30-22H</td>
            <td className="cell-Ytsi">18H30-22H&nbsp;</td>
            <td className="cell-HtHm">18H30-22H&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 id="00d8289c-35cb-4134-98ad-fac19cbdf32c" className="">
      <strong>
        <strong>Découpage des tâches</strong>
      </strong>
    </h1>
    <div
      id="662503b8-b7be-4bb8-b74f-1c052141b5e2"
      className="collection-content"
    >
      <h4 className="collection-title" />
      <table className="collection-content">
        <thead>
          <tr>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesTitle"
                >
                  <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z" />
                </svg>
              </span>
              Nom / Prénom
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Partie projet visée
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Nom de la tâche
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Charge de travail(jour/homme)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr id="79a6e1cd-8582-481a-87c2-77cf2e43926a">
            <td className="cell-title">
              <a href="https://www.notion.so/Timothee-79a6e1cd8582481a87c277cf2e43926a">
                Timothee
              </a>
            </td>
            <td className="cell-Onm~">Mise en place des API routes</td>
            <td className="cell-DIgk">Création des rooms</td>
            <td className="cell-~:vb">42h</td>
          </tr>
          <tr id="775d5957-0250-44c3-8ebb-019df23055f2">
            <td className="cell-title">
              <a href="https://www.notion.so/Bui-et-Timothee-775d5957025044c38ebb019df23055f2">
                Bui et Timothee
              </a>
            </td>
            <td className="cell-Onm~">Mise en place d’une IA des boss</td>
            <td className="cell-DIgk">IA</td>
            <td className="cell-~:vb">20h</td>
          </tr>
          <tr id="74bcb4de-92cc-438d-a0ec-297cb2364c58">
            <td className="cell-title">
              <a href="https://www.notion.so/Bui-et-Timothee-74bcb4de92cc438da0ec297cb2364c58">
                Bui et Timothee
              </a>
            </td>
            <td className="cell-Onm~">Mise en place d’un classement</td>
            <td className="cell-DIgk">Classement</td>
            <td className="cell-~:vb">10h</td>
          </tr>
          <tr id="7c5892b6-06e7-4a90-8cac-188a631ca30d">
            <td className="cell-title">
              <a href="https://www.notion.so/Timoth-e-7c5892b606e74a908cac188a631ca30d">
                Timothée
              </a>
            </td>
            <td className="cell-Onm~">Mise en place de l’hébergement</td>
            <td className="cell-DIgk">Hébergement</td>
            <td className="cell-~:vb">2h</td>
          </tr>
          <tr id="252ced39-8896-4024-84df-5a46da47a65b">
            <td className="cell-title">
              <a href="https://www.notion.so/Bui-252ced398896402484df5a46da47a65b">
                Bui
              </a>
            </td>
            <td className="cell-Onm~">test unitaire</td>
            <td className="cell-DIgk">test unitaire</td>
            <td className="cell-~:vb">24H</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p id="dcd74f1e-06f5-4d4e-af78-db915be47367" className="">
      <strong>Estimation charge </strong>:
    </p>
    <div
      id="6f8d527d-2020-4827-9515-81535368045b"
      className="collection-content"
    >
      <h4 className="collection-title" />
      <table className="collection-content">
        <thead>
          <tr>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Description
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesTitle"
                >
                  <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z" />
                </svg>
              </span>
              Priorité
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Charge( estimé)
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Charge(réalisé)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr id="4036b1aa-15f2-430a-83b8-02fe4a759253">
            <td className="cell-Auce">
              <strong>Charge maximale disponible</strong>
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/4036b1aa15f2430a83b802fe4a759253">
                -
              </a>
            </td>
            <td className="cell-gq=k" />
            <td className="cell-LcfC" />
          </tr>
          <tr id="1f5e5086-1799-4816-8bdf-f81ce007b304">
            <td className="cell-Auce">
              <strong>Charge théorique estimée</strong>
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/1f5e5086179948168bdff81ce007b304">
                -
              </a>
            </td>
            <td className="cell-gq=k">104jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="198210b1-528f-4ada-84bd-3dd5fc1c90d0">
            <td className="cell-Auce">
              Gameplay – fonction des personnages ( déplacement) (timothee)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-198210b1528f4ada84bd3dd5fc1c90d0">
                2
              </a>
            </td>
            <td className="cell-gq=k">3jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="c16d3726-fa2b-4b43-b3c6-263b7182bcc6">
            <td className="cell-Auce">
              Gameplay – fonction des personnages (&nbsp; saut) (timothee)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-1-c16d3726fa2b4b43b3c6263b7182bcc6">
                2.1
              </a>
            </td>
            <td className="cell-gq=k">3jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="3f9a9a73-eb1c-459e-9377-e05dee49e7fb">
            <td className="cell-Auce">
              Gameplay – fonction des personnages (&nbsp; dégâts)&nbsp;
              (timothee)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-3-3f9a9a73eb1c459e9377e05dee49e7fb">
                2.3
              </a>
            </td>
            <td className="cell-gq=k">21jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="8d4d529e-42db-40a4-90dd-db364d903096">
            <td className="cell-Auce">
              Gameplay – fonction des personnages ( soin)&nbsp; (timothee)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-7-8d4d529e42db40a490dddb364d903096">
                2.7
              </a>
            </td>
            <td className="cell-gq=k">1jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="5e626dae-1e4d-40eb-9395-3b663c24c1a3">
            <td className="cell-Auce">
              Gameplay – fonction des personnages ( collision)&nbsp; &nbsp;
              (timothee)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-4-5e626dae1e4d40eb93953b663c24c1a3">
                2.4
              </a>
            </td>
            <td className="cell-gq=k">1jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="069f5354-5661-490b-91e3-01c3446371a3">
            <td className="cell-Auce">
              Gameplay – fonction des personnages ( bombe)&nbsp; (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-5-069f53545661490b91e301c3446371a3">
                2.5
              </a>
            </td>
            <td className="cell-gq=k">21jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="1a5b6897-6c6e-481f-9e82-b547f750b630">
            <td className="cell-Auce">
              Gameplay – fonction des personnages ( projection)&nbsp; (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/2-6-1a5b68976c6e481f9e82b547f750b630">
                2.6
              </a>
            </td>
            <td className="cell-gq=k">3jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="93b15bf3-1d79-4a4f-b61d-dd3a15b62057">
            <td className="cell-Auce">Gameplay - IA (timothée)</td>
            <td className="cell-title">
              <a href="https://www.notion.so/3-93b15bf31d794a4fb61ddd3a15b62057">
                3
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="2a026324-2fe9-4e64-8001-e399da88e8db">
            <td className="cell-Auce">Création d’une partie (timothée)</td>
            <td className="cell-title">
              <a href="https://www.notion.so/1-2a0263242fe94e648001e399da88e8db">
                1
              </a>
            </td>
            <td className="cell-gq=k">7jh</td>
            <td className="cell-LcfC">149h</td>
          </tr>
          <tr id="619b80c0-2287-4d10-9d17-815eba3a3fa5">
            <td className="cell-Auce">
              Gameplay -Fonction compteur (timothée)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/4-619b80c022874d109d17815eba3a3fa5">
                4
              </a>
            </td>
            <td className="cell-gq=k">2jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="1d16c6be-68c5-46f0-b224-cd79defd79ee">
            <td className="cell-Auce">
              Graphisme – Interfaces touches &amp; scores + Son (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/5-1d16c6be68c546f0b224cd79defd79ee">
                5
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="7b881753-0e4e-45b2-9dfb-0ecd16b50379">
            <td className="cell-Auce" />
            <td className="cell-title">
              <a href="https://www.notion.so/7b8817530e4e45b29dfb0ecd16b50379">
                Untitled
              </a>
            </td>
            <td className="cell-gq=k" />
            <td className="cell-LcfC" />
          </tr>
          <tr id="b14e39f4-b2f5-43bd-8506-d735e07508a4">
            <td className="cell-Auce">
              Graphisme - réalisation des personnages -&nbsp;Fakhear (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-b14e39f4b2f543bd8506d735e07508a4">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC">62h</td>
          </tr>
          <tr id="25eca827-49a2-4b34-bca1-203de1c27476">
            <td className="cell-Auce">
              Graphisme - réalisation des personnages -&nbsp;Huzounet (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-25eca82749a24b34bca1203de1c27476">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC">62h</td>
          </tr>
          <tr id="f0d81205-5155-4e05-8267-ba59423e0d0c">
            <td className="cell-Auce">
              Graphisme - réalisation des personnages -&nbsp; Akhizonah (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-f0d8120551554e058267ba59423e0d0c">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC">62h</td>
          </tr>
          <tr id="9666539a-462a-4bb4-b52a-b386edc06b07">
            <td className="cell-Auce">
              Graphisme - réalisation des personnages - Osmosiscoop (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-9666539a462a4bb4b52ab386edc06b07">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="cc9f074d-6e2b-4539-b769-d481e9158cab">
            <td className="cell-Auce">
              Graphisme - réalisation 1er boss - (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-cc9f074d6e2b4539b769d481e9158cab">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC">62h</td>
          </tr>
          <tr id="a6b4fa52-0d1a-41fc-8bf4-f998881b96bd">
            <td className="cell-Auce">
              Graphisme - réalisation 2ème boss - (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-a6b4fa520d1a41fc8bf4f998881b96bd">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="99a1bc0f-98e0-4a7a-bf4a-82f9b1e7e8b3">
            <td className="cell-Auce">
              Graphisme - réalisation 3ème boss - (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-99a1bc0f98e04a7abf4a82f9b1e7e8b3">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="6a3a55ee-053f-4740-9af4-61406959b529">
            <td className="cell-Auce">
              Graphisme - réalisation 4ème boss - (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-6a3a55ee053f47409af461406959b529">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="6e73eda9-75b9-4bb7-8984-44b4b7249eba">
            <td className="cell-Auce">
              Graphisme - réalisation boss final - (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/6-6e73eda975b94bb7898444b4b7249eba">
                6
              </a>
            </td>
            <td className="cell-gq=k">4jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="919618fe-df74-42e0-937e-73d3732dc746">
            <td className="cell-Auce">Gameplay – Son Musique (david)</td>
            <td className="cell-title">
              <a href="https://www.notion.so/10-919618fedf7442e0937e73d3732dc746">
                10
              </a>
            </td>
            <td className="cell-gq=k">3jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="93346555-2d9e-40a1-9cd9-f064f0f6f99c">
            <td className="cell-Auce">
              Infrastructure - hébergent sur le Raspberry pi&nbsp; (timothee)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/8-933465552d9e40a19cd9f064f0f6f99c">
                8
              </a>
            </td>
            <td className="cell-gq=k">1jh</td>
            <td className="cell-LcfC" />
          </tr>
          <tr id="9aaacbba-6847-4357-8cd1-cf3d1016c9bb">
            <td className="cell-Auce">
              Graphisme - réalisation des maps&nbsp; (david)
            </td>
            <td className="cell-title">
              <a href="https://www.notion.so/7-9aaacbba684743578cd1cf3d1016c9bb">
                7
              </a>
            </td>
            <td className="cell-gq=k">25h</td>
            <td className="cell-LcfC">5heures</td>
          </tr>
          <tr id="a8e40a24-23ff-4a9b-9866-dba1db98df20">
            <td className="cell-Auce" />
            <td className="cell-title">
              <a href="https://www.notion.so/a8e40a2423ff4a9b9866dba1db98df20">
                Untitled
              </a>
            </td>
            <td className="cell-gq=k" />
            <td className="cell-LcfC" />
          </tr>
        </tbody>
      </table>
    </div>
    <h1 id="a735610d-fb6d-41b8-9a52-274b8565c83d" className="">
      Timeline / Milestones
    </h1>
    <p id="0b7db685-01d9-427e-9c5d-7dd69008949b" className="">
      <a href="https://github.com/pytoncraft2/jeu-du-drapeau-phaser3/releases">
        https://github.com/pytoncraft2/jeu-du-drapeau-phaser3/releases
      </a>
    </p>
    <p id="9b62d583-9221-48c7-8837-ccb49a698666" className="">
      <strong>11/02/22</strong> Lancement projet
    </p>
    <p id="8701e39f-f72a-4328-8669-6bd2de079ee0" className="">
      <strong>11/03/22</strong> Milestone Prototype :
    </p>
    <div className="indented">
      <p id="e0b31ceb-8a8e-4e46-a414-7979f7c24fe7" className="">
        Affichez l’interface des touches, scores, le temps, création d’une
        partie, map
      </p>
    </div>
    <p />
    <p id="feb77a97-8a65-4c8a-abca-2d58733beb74" className="">
      <strong>22/07/22 </strong>Milestone Prototype jouable :{" "}
    </p>
    <p id="07307f88-6962-4711-9e88-47ba966a5894" className="">
      gameplay fonctionnelles pour les personnages Fakhear,Huzounet, Akhizonah,
      Osmosiscoop
    </p>
    <p id="e54d3955-35cb-4c11-938e-148b949a92bb" className="">
      IA Boss fonctionnelle.
    </p>
    <p id="4402a5ef-21a5-4404-a8e5-49f26c81d376" className="">
      <strong>23/07/22</strong> Milestone Alpha : Alpha testable sur Raspberry
      pi, fonctionnelle
    </p>
    <p id="a65e6dbb-59b3-4463-9461-a7b2f5acfee8" className="">
      <strong>19/11/22</strong> Milestone Final : Version stable et
      fonctionnelle
    </p>
    <p id="5869205b-5e12-49de-9aaa-dcab716bdf69" className=""></p>
    <p id="395a8613-07e1-4854-a95c-7064dbec5ff4" className="">
      Planning prévisionnel :
    </p>
    <div
      id="216762b1-6df3-4ef2-b4b5-5ac001e46263"
      className="collection-content"
    >
      <h4 className="collection-title" />
      <table className="collection-content">
        <thead>
          <tr>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesTitle"
                >
                  <path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z" />
                </svg>
              </span>
              01/01/22
            </th>
            <th>
              <span className="icon property-icon">
                <svg
                  viewBox="0 0 14 14"
                  style={{
                    width: 14,
                    height: 14,
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.45)",
                    flexShrink: 0,
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  className="typesText"
                >
                  <path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" />
                </svg>
              </span>
              Lancement projet
            </th>
          </tr>
        </thead>
        <tbody>
          <tr id="32c04630-1acd-4fca-aa9c-188c59b9484c">
            <td className="cell-title">
              <a href="https://www.notion.so/11-03-22-32c046301acd4fcaaa9c188c59b9484c">
                11/03/22
              </a>
            </td>
            <td className="cell-[soO">
              Affichez l’interface des touches et&nbsp; Affichage des touches I,
              O, P&nbsp; &nbsp;Scores : le temps qui défile qui représente le
              score,&nbsp; &nbsp;Création d’une partie : Affiche le nom de la
              partie, le lien de partage les personnages,&nbsp; Bouton :
              commande,&nbsp;&nbsp; Et le bouton “Commencer”&nbsp; &nbsp;Map
              :&nbsp; Création de 7 pièces
            </td>
          </tr>
          <tr id="a33aa175-42cf-45d2-b097-88cf4c92b113">
            <td className="cell-title">
              <a href="https://www.notion.so/22-07-22-a33aa17542cf45d2b09788cf4c92b113">
                22/07/22
              </a>
            </td>
            <td className="cell-[soO">
              gameplay fonctionnelles pour les personnages Fakhear, Huzounet,
              Akhizonah,osmosiscoop Mise en place des déplacements, du saut,
              action sur les évènements de la map, l’attaque primaire et
              l’attaque secondaire.&nbsp; &nbsp; Design des personnes et des
              boss :&nbsp; Dessin des personnages et des boss&nbsp; &nbsp; IA
              Boss fonctionnelle :&nbsp; Mise en place de la logique des
              boss&nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <tr id="51b7a4cd-0e8f-4e1f-afbc-673e144be904">
            <td className="cell-title">
              <a href="https://www.notion.so/23-07-22-51b7a4cd0e8f4e1fafbc673e144be904">
                23/07/22
              </a>
            </td>
            <td className="cell-[soO">
              Test alpha&nbsp; Alpha testable sur Raspberry pi, fonctionnelle en
              autonomie&nbsp;
            </td>
          </tr>
          <tr id="4fd281fb-4421-40fd-b18f-5c019c52a9e6">
            <td className="cell-title">
              <a href="https://www.notion.so/19-11-22-4fd281fb442140fdb18f5c019c52a9e6">
                19/11/22
              </a>
            </td>
            <td className="cell-[soO">
              Test Final&nbsp; Version stable et fonctionnelle&nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1 id="4ab2cdfb-6cca-4802-bdbd-699868aeffa5" className="">
      Contraintes organisationnelles
    </h1>
    <p id="3da6afe1-7ad4-4902-9a32-7ac955bebd9c" className=""></p>
    <p id="06010e76-3ea6-4695-9f50-bff87675e69a" className="">
      <span style={{ borderBottom: "0.05em solid" }}>Contraintes de David</span>{" "}
      : Impossible de travailler le soir pour mardi et mercredi car il doit se
      lever tôt pour se déplacer de nancy à strasbourg (entreprise) puis le
      retour.
    </p>
    <p id="45901e8a-9556-478f-8d68-9290e22b214c" className=""></p>
    <p id="b7104294-1ba1-4857-b509-d86fe225c7fe" className="">
      <span style={{ borderBottom: "0.05em solid" }}>Contraintes de Tim</span> :
      Lundi soir il y a une réunion avec l’entreprise.
    </p>
    <p id="871efddf-6bc8-41c1-bdce-8232c31f95e9" className=""></p>
    <p id="fcc2fd8b-b19d-4f20-a2eb-eea2814cedb1" className=""></p>
  </div>
</article>


    </div>
  )
}

export default Home
