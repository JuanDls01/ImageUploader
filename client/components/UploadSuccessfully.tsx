import {FcOk} from 'react-icons/fc'

export const UploadSuccessfully = ({imageFile}: any) => {
    console.log(imageFile)
    return (
        <>
            <FcOk />
            <h2 className='font-sans font-medium text-xl'>Uploaded Successfully</h2>
            <img
                src={imageFile[0].preview}
                onLoad={() => { URL.revokeObjectURL(imageFile.preview) }}
            />
        </>
    )
}