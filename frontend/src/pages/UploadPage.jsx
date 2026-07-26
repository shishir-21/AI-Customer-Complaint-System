import { useState } from "react";

import { uploadComplaintPDF } from "../api/aiApi";

function UploadPage() {

    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        if (!file) {

            alert("Please select a PDF.");

            return;
        }

        const result = await uploadComplaintPDF(file);

        console.log(result);
    };

    return (
        <div>

            <h1>AI Customer Complaint System</h1>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={handleUpload}>
                Upload & Analyze
            </button>

        </div>
    );
}

export default UploadPage;
