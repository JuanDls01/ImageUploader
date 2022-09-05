import {FcOk} from 'react-icons/fc'

export const UploadSuccessfully = ({imageUrl}: any) => {
    const fullImageUrl = 'http://localhost:8000'+imageUrl
    
    const copyHandler = () => {
        navigator.clipboard.writeText(fullImageUrl)
    }

    return (
        <>
            <FcOk className='w-10 h-10 m-3'/>
            <h2 className='font-sans font-medium text-xl '>Uploaded Successfully</h2>
            <img src={fullImageUrl} className='rounded-2xl w-80 h-52 m-8'/>
            <div className='flex mb-3 rounded-lg bg-blue-100 w-80 h-10 p-1'>
                <input type='text' defaultValue={fullImageUrl} readOnly className='bg-transparent text-black w-80'></input>
                <button onClick={copyHandler} className='bg-sky-500 hover:bg-sky-700 py-1 px-2 rounded-md flex items-center justify-center text-sm text-white'>Copy</button>
            </div>
        </>
    )
}