export const TransformToBase64 = (archivo: Blob) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(archivo)
        reader.onload = function () {
            let auxBase64 = reader.result;
            let base64 = typeof (auxBase64) === 'string' ? auxBase64.split(',')[1] : '';
            resolve(base64)
        }
    })
}

