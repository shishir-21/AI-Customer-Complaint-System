import { useState } from "react";
import { uploadComplaintPDF } from "../api/aiApi";
import ComplaintForm from "../components/complaint/ComplaintForm";
import CopilotPanel from "../components/copilot/CopilotPanel";

function UploadPage() {

    const [file, setFile] = useState(null);
    const [aiResult, setAiResult] = useState(null);

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        try {
            const result = await uploadComplaintPDF(file);
            console.log(result); // Optional: for debugging
            setAiResult(result);
        } catch (error) {
            console.error(error);
            alert("Failed to analyze PDF.");
        }
    };

    return (

        <div
            style={{
                display: "flex",
                gap: "30px",
                padding: "30px",
                alignItems: "flex-start",
            }}
        >

            {/* LEFT SIDE */}

            <div style={{ flex: 2 }}>

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

                {aiResult && (
                    <ComplaintForm aiResult={aiResult} />
                )}

            </div>

            {/* RIGHT SIDE */}

            <div style={{ flex: 1 }}>

                <CopilotPanel
                    onAIResult={setAiResult}
                />

            </div>

        </div>

    );
}

export default UploadPage;
