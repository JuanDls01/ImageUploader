import React from 'react'
import { useDropzone } from 'react-dropzone';
import {FcAddImage} from 'react-icons/fc';
import axios from 'axios';

import { TransformToBase64 } from '../utils/TransformToBase64';

const urlApi = 'http://localhost:8000'

export const UploaderCard = ({setIsUploaded, setImageUrl}:any) => {

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*':[]
        },
        onDrop: async (acceptedFiles: File[]) => {
            const image = acceptedFiles[0]
            Object.assign(image, {
                preview: URL.createObjectURL(image)
            })

            const imageBase64 = await TransformToBase64(image)

            const imageUrl = await axios.post(urlApi+'/api/photo/upload', {
                file: imageBase64
            })

            setImageUrl(imageUrl.data.photo.file)
            setIsUploaded(true)
        }

    })

    return (
        <>
            <h2 className='font-sans font-medium text-xl m-4'>Upload your image</h2>
            <p className='font-sans font-thin text-xs text-gray-400'>File should be Jpeg, Png...</p>
            <div 
                {...getRootProps({className: 'mx-8 my-5 border-dashed border-2 rounded-2xl border-sky-500 border-colorrounded-2xl w-72 h-52 bg-gray-400/30 dark:bg-gray-400/20 flex flex-col justify-center items-center'})}
            >
                <FcAddImage className='w-1/2 h-1/2'/>
                <p className='font-sans font-thin text-xs text-gray-400 m-3'>Drag 'n' drop your image here, or click to select</p>
                <input {...getInputProps()} hidden/>
            </div>
            <p className='font-sans font-thin text-xs text-gray-400'>Or</p>
            <input type='file' id='imageBttn' accept='image/*' {...getInputProps()} hidden/>
            <label htmlFor='imageBttn' className=' m-4 bg-sky-500 hover:bg-sky-700 w-28 h-8 rounded-md flex items-center justify-center text-white'>Choose a file</label>
        </>
    )
}