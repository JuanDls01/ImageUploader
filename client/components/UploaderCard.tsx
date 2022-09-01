import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone';
import {FcAddImage} from 'react-icons/fc'

export const UploaderCard = () => {
    // const wrapperRef = React.useRef<any>();

    // const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    // const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    // const onDrop = () => wrapperRef.current.classList.remove('dragover');

    // const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault()
    //     const newFile = event.target.files
    //     console.log(newFile)
    // }

    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*':[]
        },
        onDrop: acceptedFiles => {
            console.log(acceptedFiles)
        }

    })

    // const onDrop = () => {
    //     acceptedFiles.map(file => console.log(file))
    //     // console.log(acceptedFiles.map())

    // }

    return (
        <div 
            className='bg-white dark:bg-slate-800 w-96 h-96 flex flex-col items-center justify-around p-5 rounded-2xl drop-shadow-md'
        >
            <h2 className='font-sans font-medium text-xl'>Upload your image</h2>
            <p className='font-sans font-thin text-xs text-gray-400'>File should be Jpeg, Png...</p>
            <div 
                // 
                {...getRootProps({className: 'border-dashed border-2 rounded-2xl border-sky-500 border-colorrounded-2xl w-4/5 h-44 bg-gray-400/30 dark:bg-gray-400/20 flex flex-col justify-center items-center'})}
            >
                <FcAddImage className='w-1/2 h-1/2'/>
                <p className='font-sans font-thin text-xs text-gray-400 m-3'>Drag 'n' drop some files here, or click to select filesf</p>
                <input {...getInputProps}/>
            </div>
            {/* <p className='font-sans font-thin text-xs text-gray-400'>Or</p> */}
            {/* <input type='file' id='imageBttn' accept='image/*' onChange={onDrop} hidden/> */}
            {/* <label htmlFor='imageBttn' className='bg-sky-500 w-28 h-8 rounded-md flex items-center justify-center text-white'>Choose a file</label> */}
        </div>
    )
}