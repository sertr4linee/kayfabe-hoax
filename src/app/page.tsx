"use client"

import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Video Background Page</title>
        <meta name="description" content="A Next.js page with a looping video background" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Warang+Citi&display=swap');`}
        </style>
      </Head>

      {/* <div className="video-container">
        <video className="video-background" autoPlay muted loop>
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

      <p> k̸̡̡̧̛̛̛̛̛̜̮̞͙̦͉̳̹̦̬͍̣̼͚͕̫̳̝̻̦̪͉̰̈͂̿̄̋̆̋̓̀̓̓̈̀͑͑̒̿͋͒̎͂̔́͛́̀͛̀͗͑̏͂̆͑̀͛̀̑̈́͋͑̔̎̆̽̋̈́̇̾̌͗̒͌͌͐̉͋̍͌̆̋̎̋͐̑̒͗͛̂̓̒̍͌̈́̆̌̏͗͆̽̀̀̒̅̐̍̓̽̉̅̈́̎̋͊̆͆̊͒̌͌̍̀̇͑͂̌̀̿̀̈́͂̈̆̓̊̋̅͊̈̋͌̌͐̾̓̓̎͌̍́͌̂́͐̆̔̉̈͒͂͐̌̾̑̃͂̌̓͆̏̓̀̿̌̊̿͌̏͂̍̔͌̀͆̈͒͂̈̆̒̓̆͛̈̂͋̇̊͛̈̇̇̐̈̀̈͆̑͋̂̓͆͆͛̀̄͗̒̿̒̔̈͛͋̀̋̅͋̊̔͂̎̉̈́̄̀̆͗͛̾͂̈̅́̉̓͌͘̚͘̚̚̕̕̕̚̚͘͘͘̕͘̚͝͝͝͝͝͠͠͝͝͝͠͝͝͠͝͝͝͝͝ͅͅ4̷̢̨̨̡̡̨̧̢̧̨̢̢̢̡̛̥̝͙͓̟̰̞͕̰̹̥̟̲̤̫͙̺̼͖̝̭͔̳͕͍̥͎̯̝̦̭̩̻̦̺͔̗̪̮̭͈͚͙͍̼̜̻͚̞̺͖̝̦̠͕̺̲͕̬̬̪̤̞̣̥̟̰̹͈͍̮̦̼͉̜̱͇̙͖̞̰̖͚̻͈͍̯͚̼̲̻̯̖̮̠̳͙͖͓̪̗͖̱͍̪̳͙̹͕͓̤̦͚͇͍͇͉͖͍̥͚̮̙̫͇̞̹͍̗͚̦̥͚̯͉͖̳̟̦̭͙̠͇̝̟͉͍̫̭̲̥̞̘̻͎̬͇̻͖̝͕͚̪͓̮̠͚̭̦͍̐͊́́̏̓̔͋͗̅͆̀̊̇̈́̌̌̓̔̔͑̔͐͌̐̓͗̉̉̔̍̏̋͘̚͘͜͜͜͜͜͠͠͠͠ͅͅͅͅy̶̡̡̡̧̡̨̨̨̨̢̧̧̨̡̧̢̢̢̢̡̛̛̛̛̬̬̝̩͙̱̙̹͕̼̖͓͇̙̱̲͖̫͚̟̞̗̭͈͎̘̻͖̝̬̬̘̙̫͉͍̱̮̺̭͚̻̖͙̰̲͇̪̪̩̫̖͖̰͖͕̖̹̭̟̙̲͉̜̩̬̹̣̘͚̦͎̙̭̪̰̜̘̞̬̥͍̖̤͖̪͕͇͙̠͎̰̯̤̩͍͍̪̤͚̗̟͈̳̙̰͍͔̙̫͖̯̮̜̦͈̰̗̮̪͕͙̫̹̬̭͉͓̠̘̠͖̪̤͚͍̣̭̤̼̬̱̙͕̫̖̱̥̜̦̹̺̳̭͈͍̯̤͔̰̖͕̠̳̰͍̝͓͕̗̲͈̫͖̭̦̙̰̯̳̲̣͖̙̳̙̣̣̳̫̞̞̖̼̦̩͓̬͕̪͔̼̖̘̫͉̱̗̝̖̮̼͎̝̠̝̘͍͕̱̗͙̫̝̜̗̖̦̤̜̙͚̮̱̞̖͓̳̹̌̎̀̄̿̂̍̌̀̒̃̈́̇̌̒̆̉̍̈́͐̆̒̀̌͒̓̒̀̾̑̀̔̍̄̂͌͌̋̋͒͛̿̋͐̄̿͗̔̑͐͒́̆͋̈͊̉̐͋̎̊͐͊̿͗̒̊̅͑̃͗̇͆̊̿͊̓̿̌̀͆͐͊́͐̃͛̓̽̀͐́͋̍̅̑͊͛͊̀̃̂̊̉̄̇̇͋̇̌͛̍͑̈̀͆͐̋̇̓̿̑͊̿͗͐̓͂͆̐̽͊̈́̒̍́̒́̏̌̓̀̽̒͌̈̈́͐̅͋̍̀̅̀͒̽͗͆̆͐̍̌͊͌͑̚̚̕͘̕̕͘̚̚̕̕͘̚̕̕̕͘͘̚̚̕̚̚͜͜͜͜͜͝͝͠͝͠͝͝͝͝ͅͅͅͅͅͅͅͅͅf̵̢̢̧̧̢̡̨̧̧̢̧̧̢̢̨̡̨̥͚͇̹̤̺̲̞͚̝͕̖̞̮̜̬̙̙̯̻̺̳̘̼̤̬̮̰̱͇̗̹̰̼̹̫̩̞̺̺̲͕͎̖͚͚͖̰̗̙̤͓͈̣͎͎͎͇̣̤̪̳͙̻̣̖̥͈̥͇͚̦̗̹̟̫̩̹̠͇̞̜͙͍̘̟͖͚͓̩̲̗͈͎͕̱̺͇̣͚̫̰̣̺̠̳̠͇̦̰͉͎̬̬̪̳͕̥͎͍̪̭̯̮͖̟̹̪̦̼̲̥̻̓̀͌̌͌̽̊̍͊͊̿̒̐̃́̾̾͜͜͜͝͝͠ͅͅͅ4̶̡̡̢̨̡̧̧̨̨̢̧̢̧̡̢̢̢̨̧̢̨̡̡̡̧̡̛̛̤̰͓̣͍̹̰͓̼͓͎̟̩͈͙͇̲̘̳̜̟̬̘̜̗̰̳̣̼͙̺̞̠̖͓̥͔̝̭̦̲͈̙̟̰̹̻̤̤̥̤̩̣̺͕̥̥̗͇̳̘͔̞̹̤̥̖̫̮̳̝̫̮̞̟̙͔̼̯͔̪̙̟̦̥͚̱͚̙̱͉̤̩̻̙͓̥͍͚͔̥̗̤̞͇͕͉̲̘̻̜̪͎͚̙̳̼̤̪͉̳̰̗̼̬̹͍̘̰͈̗̲̤̟̪̻͔̥͓̮̖͕̻̺̭͔̱̯̞̖̝̩͚̝̪̭̲̣̖͖̹͓͈̞̱̰̜̹̦̙̺̺͖̗̘͖̬̪͚̬̜͈̭͖̰̣̺͖͉̥̖̘̘̤̱͖̩̲͉͂̑̈́̅̉͗̿͗͗̋̎̿̊̇̀̊͋͆́̎̇̃́̈́̏̈́͋̍͆̑̓͂̈̽͒̿͋͐̀̎̑̔̓̔͛̄̑͘̕̕͘͜͜͜͜͠͝ͅͅͅͅͅͅͅb̷̨̢̡̡̡̢̧̨̨̢̡̡̨̢̡̡̧̡̨̡̧̡̛͕͍̟̭̖̥͈̹̥̰̳̺͍̘̤̰̼̪̣͙͎̯̜̞̼͔̞̗̱̘̠̠̜̤͎̝̫̳̠̼̳̖̯̟̥̩̝͇̟̺̗̞̮̳̬̱͚̻͉̰̖͎̦͙͖̳̝͕̻̫͈̤̳͖̟̻͇͎̳̘̠̜̟̟͇̬̤̰̭̥͍͍͈̝̮̖͕͍̳͔̘̹̭̦̳͖̯͔̱̜̥̫̙̤̳̰̫̠͎̯̻̫̗̟̮̱̤͍͙͕͖̟̪͓͓͍͚̻͎̪͇̰̩̞͎̰̟̰̗̯͙͚͍͇̙͈̪͕͉̟͈͉͙͍̤̭͔̝̮̰͙̭͈͎̜̝͔̥̒̆̏̅̉̉͗̿͌̔͆̋̈̈́͑́̅́̇͑̈́̉̃̎̀̄̒̽͋̄̾͘͘͜͜͜͜͜͜͝͠͝ͅͅͅ3̵̢̡̡̨̧̧̧̡̨̨̢̢̡̨̨̨̡̡̨̢̡̢̧̡̧̡̡̛̛̛̛̛̛̛̛̫̭̻͕̩̰̫̳͉̙̥̩̭̟̰̫̜̘̜̼͕̭͈̜̖̪͔̦̣̦̥̗̖̝͚͎͚̜͖̭̩͇̼͉̰̙̣̳̞͍̞̯̘̭̟͖̲̯̞̮̟̟͍̦̞̻͈̰̦̠̤̼͓̻̣̺̥͙̭̰̳͚̳͕̜͉͔̙̮͈̰̩̗̟͍͍̤̣̜͙̬̯̺̦̫̺̻̝͈͕͔̜͔̬̥̻̺̘̻̗͓̩̯͙̹̲̙̣̲̙̦̯̪̠͍̲̬͖̺͍̗̯̝̰̣̼̻͚͕̩̗̩̫̦̱̤̮̦̬͍̻̗̩̟͙̻̘̘̦̭̦̞͍̥͈͎͖̮̟̝̠͍͎͉͖̜̝̤̬̱͖̮̤̞̟̼̱̥̜̦̗̥̬̜̳̘̠͉͕̬̤̬̹̟̘̪̩͚̠̻͉̰͔̼͉̯̣͙̝̗͔̟̣̯̦̤̳̤̯̣̭̺͙͍̔̍̌̆̓̎̊́̇̏̐̂͆̀̈́̐̊̍͐́̏͋͂͋̇̒͆̀́̃̒̾̎̔͋̂̅̃̾̀̈̈́̈̽̅̂͂͑̐͊̐̉̉̈́̏̅̎͂̾̈́͂͗̿̇̽̅̎͌̒͆̓̊̇̀̏̐̀̾̒͑́͛̓̑͑̈̿̓̑̑̓̽̋̐͐̓̔̄̈́̀̇̌̾̽̓̍̓̾́̎̆̉͑̓́̓̿̉̓͌̐̒̅̌̂̓̒͊̌̔̀̈́̀̄̀̃̂͊͆̀͗͆̋̿̓̐̐̈́̊̆͐͗̉̈̀̀̿̐́̄̏͑͂̉͗̇̈́͒̋̀̅̉͐̓̂̆͛́̉̇̐̄̀̈̔̓̾̑́͗̀̈́̎̒̃̑́͊̈́̏̏͛̈́̅̌͐͋͌̀͂̏̐͂̆͛͗̔̀͆̾̈́̈́͂̈́̄̑̒̽͗̀̀̾̇̂̓̈̈́̿̋͋̇̽̈́̉̃̋̚͘͘͘͘̚̕͘̕̕̕͘̕͜͜͜͜͜͝͝͝͝͝͠͝͝͝͠͝͝͝͝͝͝͝͠͠͝͝͝͝͝͝ͅͅͅ </p>
      <div className="content">
        <h1 className='custom-text'>Réduisez les erreurs humaines et l&quotambiguïté situationnelle. Des études ont montré que des instructions de travail et des
          procédures opérationnelles ambiguës peuvent conduire à des erreurs humaines. Des procédures ambiguës ou facilement mal interprétées, des procédures contradictoires,
          le recours aux techniques de l&quotopérateur au lieu de procédures formelles et des préjugés personnels peuvent tous conduire à des incidents et
          des événements graves.
        </h1>
        <Image src="/78746552695.png" alt="Centered Image" className="center-image" />
        <div className="link-container">
            <a href="/00101110.png" target="_blank" className="image-link text-blue-400">01</a><br></br>
            <a href="/00110001.png" target="_blank" className="image-link">10</a>
            <a href="/00110010.png" target="_blank" className="image-link text-violet-900">10</a><br></br>
            <a href="/00110110.png" target="_blank" className="image-link">11</a>
          </div>
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          height: 100vh;
          width: 100vw;
          background-color: black;
          font-family: 'Noto Sans Warang Citi', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .content {
          color: white;
          text-align: center;
        }

        h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.5rem;
        }

        .center-image {
          max-width: 300px;
          margin: 20px auto;
          display: block;
        }

        /* Texte avec la police importée */
        .custom-text {
          font-family: 'Noto Sans Warang Citi', sans-serif;
          font-size: 1.2rem;
          margin-top: 20px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Home;
