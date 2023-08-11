import Image from 'next/image'
import Head from 'next/head'
import './globals.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucas Portfolio</title>
        <meta name='description' content='General' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='min-h-screen'>
          <nav>
            <h1>developed by Lucas Leung</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li><a href="#">Resume</a></li>
            </ul>
            
          </nav>
        </section>
      </main>
    </div>
  )
}
