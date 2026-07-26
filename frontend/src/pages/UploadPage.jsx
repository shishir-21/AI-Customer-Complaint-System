import { useState } from "react";

import ComplaintForm from "../components/complaint/ComplaintForm";
import CopilotPanel from "../components/copilot/CopilotPanel";

import AppLayout from "../components/layout/AppLayout";
import LeftPanel from "../components/layout/LeftPanel";
import RightPanel from "../components/layout/RightPanel";

const createEmptyDraft = () => ({
    complaint_source: "AI Copilot",
    customer_name: "",
    product_name: "",
    product_strength: "",
    batch_number: "",
    quantity_affected: "",
    manufacturing_date: "",
    expiry_date: "",
    complaint_type: "",
    complaint_description: "",
    initial_severity: "",
    priority: "",
});

function UploadPage() {

    const [aiResult, setAiResult] = useState(null);
    const [formData, setFormData] = useState(createEmptyDraft);
    const [copilotSession, setCopilotSession] = useState(0);

    const handleExtraction = (result) => {

        setFormData((prev) => ({
            ...prev,
            ...result.extracted_data,
        }));
        setAiResult(result);

    };

    const handleDraftUpdate = (changes) => {

        setFormData((prev) => ({
            ...prev,
            ...changes,
        }));

        if (changes.initial_severity) {
            setAiResult((prev) => prev
                ? { ...prev, risk: changes.initial_severity }
                : prev);
        }

    };

    const handleCommitSuccess = () => {

        setFormData(createEmptyDraft());
        setAiResult(null);
        setCopilotSession((prev) => prev + 1);

    };

    return (

        <AppLayout

            left={

                <LeftPanel>

                    <ComplaintForm
                        aiResult={aiResult}
                        formData={formData}
                        setFormData={setFormData}
                        onCommitSuccess={handleCommitSuccess}
                    />

                </LeftPanel>

            }

            right={

                <RightPanel>

                    <CopilotPanel
                        key={copilotSession}
                        currentForm={formData}
                        hasActiveDraft={Boolean(aiResult)}
                        onExtraction={handleExtraction}
                        onDraftUpdate={handleDraftUpdate}
                    />

                </RightPanel>

            }

        />

    );

}

export default UploadPage;
