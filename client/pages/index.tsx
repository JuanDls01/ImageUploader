import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { UploaderCard } from '../components/UploaderCard'
import { UploadSuccessfully } from '../components/UploadSuccessfully'

const Home: NextPage = () => {
  const [imageFile, setImageFile] = useState([])
  const [isUploaded, setIsUploaded] = useState(false)
  

  console.log(isUploaded)
  return (
    <div className='px-5'>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex items-center justify-center h-screen'>
        <div className='bg-white dark:bg-slate-800 w-96 h-96 flex flex-col items-center  p-5 justify-around rounded-2xl drop-shadow-md'>
          {isUploaded?<UploadSuccessfully imageFile={imageFile} />: <UploaderCard setIsUploaded={setIsUploaded} setImageFile={setImageFile}/>}
        </div>
      </main>

      <footer className='flex py-5 border-t-2 border-gray-300 border-opacity-20 items-center justify-center'>
        <p>created by Juan De los Santos - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default Home
