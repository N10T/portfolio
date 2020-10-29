import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Photo from './components/Photo'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Andy Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Photo/>
    </div>
  )
}
