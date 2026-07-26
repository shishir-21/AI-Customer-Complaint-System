import { useState } from "react";

import {
    Button,
    Stack,
    Typography,
} from "@mui/material";

import { uploadComplaintPDF } from "../api/aiApi";

import ComplaintForm from "../components/complaint/ComplaintForm";
import CopilotPanel from "../components/copilot/CopilotPanel";

import AppLayout from "../components/layout/AppLayout";
import LeftPanel from "../components/layout/LeftPanel";
import RightPanel from "../components/layout/RightPanel";
import Header from "../components/layout/Header";

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

            setAiResult(result);

        } catch (error) {

            console.error(error);

            alert("Failed to analyze PDF.");

        }

    };

    return (

        <AppLayout

            left={

                <LeftPanel>

                    <Header />

                    <Stack spacing={3} mt={4}>

                        <Typography variant="h6">

                            Upload Complaint PDF

                        </Typography>

                        <Button
                            variant="contained"
                            component="label"
                        >

                            Choose PDF

                            <input
                                hidden
                                type="file"
                                accept=".pdf"
                                onChange={(e) =>
                                    setFile(e.target.files[0])
                                }
                            />

                        </Button>

                        {file && (

                            <Typography>

                                Selected File: {file.name}

                            </Typography>

                        )}

                        <Button
                            variant="contained"
                            onClick={handleUpload}
                        >

                            Upload & Analyze

                        </Button>

                        {aiResult && (

                            <ComplaintForm
                                aiResult={aiResult}
                            />

                        )}

                    </Stack>

                </LeftPanel>

            }

            right={

                <RightPanel>

                    <CopilotPanel
                        onAIResult={setAiResult}
                    />

                </RightPanel>

            }

        />

    );

}

export default UploadPage;
