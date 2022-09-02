import React, {useCallback, useState} from 'react'
import { useDropzone } from 'react-dropzone';
import {FcAddImage} from 'react-icons/fc'

export const UploaderCard = ({setIsUploaded, setImageFile}:any) => {
    // const [imageFile, setImageFile] = useState([])

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*':[]
        },
        onDrop: (acceptedFiles: any) => {
            setImageFile(acceptedFiles.map((file:any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
            // console.log(imageFile)
            setIsUploaded(true)
        }

    })

    return (
        <>
            <h2 className='font-sans font-medium text-xl'>Upload your image</h2>
            <p className='font-sans font-thin text-xs text-gray-400'>File should be Jpeg, Png...</p>
            <div 
                {...getRootProps({className: 'border-dashed border-2 rounded-2xl border-sky-500 border-colorrounded-2xl w-4/5 h-44 bg-gray-400/30 dark:bg-gray-400/20 flex flex-col justify-center items-center'})}
            >
                <FcAddImage className='w-1/2 h-1/2'/>
                <p className='font-sans font-thin text-xs text-gray-400 m-3'>Drag 'n' drop your image here, or click to select</p>
                <input {...getInputProps()} hidden/>
            </div>
            <p className='font-sans font-thin text-xs text-gray-400'>Or</p>
            <input type='file' id='imageBttn' accept='image/*' {...getInputProps()} hidden/>
            <label htmlFor='imageBttn' className='bg-sky-500 hover:bg-sky-700 w-28 h-8 rounded-md flex items-center justify-center text-white'>Choose a file</label>
        </>
    )
}