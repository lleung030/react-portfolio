import Image from 'next/image'
import Head from 'next/head'
import './globals.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLInkedin, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'
import profile from '../public/profile.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucas Portfolio</title>
        <meta name='description' content='General' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developed by Lucas Leung</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='bg-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8' href="#">Resume</a></li>
            </ul>
            
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Lucas Leung</h2>
            <h3 className='text-2xl py-2'>Developer and Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
            I am Software Engineer who is passionate about making open-source more accessible, create technology that increase efficiency, and building a community.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto'>
            <Image src={profile} layout='fill' objectFit='cover' />
          </div>
        </section>
        
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>After graduating as an alumni of Coding Temple, I continued to refine my skills as a Software Engineer by building various web applications. In my time as a software engineer at <span className='text-teal-500'>Volt Equity</span> I implemented AWS S3 to incorporate object storage for storing and retrieving large amounts of data, such as files, images, and videos as part of the backend for production value applications. I took my skills and continued to build modern application clones such as Instagram and ChatGPT using OpenAI. I have gained unique experiences in developing web apps in languages such as Javascript and Typescript as well as leveraged my skills in backends such as SQL, Firebase and GraphQL.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
