import { ProgressBar } from "react-bootstrap";

export const UploadProgress = ({uploadPercentage}: any) => {
    return (
        <>
            <h2 className='font-sans font-medium text-xl'>Uploading..</h2>
            <ProgressBar now={uploadPercentage} />
        </>
    )
}