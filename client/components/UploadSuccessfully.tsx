import {FcOk} from 'react-icons/fc'

export const UploadSuccessfully = ({imageFile}: any) => {
    console.log(imageFile)
    const copyHandler = () => {
        navigator.clipboard.writeText(imageFile[0].path)
    }

    return (
        <>
            <FcOk />
            <h2 className='font-sans font-medium text-xl'>Uploaded Successfully</h2>
            <img
                src={imageFile[0].preview}
                onLoad={() => { URL.revokeObjectURL(imageFile.preview) }}
            />
            <div>
                <input type='text' defaultValue={imageFile[0].path} readOnly></input>
                <button onClick={copyHandler}>Copy</button>
            </div>
            
            
        </>
    )
}