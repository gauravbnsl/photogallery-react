import React, { useState } from 'react'; 

const UploadForm = () => {
    const fileTypes = ["image/png", "image/jpeg"]
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileUpload = (e) => {
        let selected = e.target.files[0];
        console.log('File uploaded', selected.type);
        if (selected && fileTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image with file type jpeg or png');
        }
    }

    return (
        <div>
            <div>Your photos here</div>
            <div><input type="file" onChange={fileUpload}/></div>    
                { error && <div>{error}</div>}
                { file && <div>{file.name}</div>}
        </div>
    )
}

export default UploadForm;