import { useEffect, useState } from "react";

import {
    Box,
    Snackbar,
    Alert,
} from "@mui/material";

import { saveComplaint } from "../../api/complaintApi";

import ComplaintHeader from "./ComplaintHeader";
import CustomerSection from "./CustomerSection";
import ProductSection from "./ProductSection";
import DefectSection from "./DefectSection";
import RiskAssessmentCard from "./RiskAssessmentCard";
import AISummaryCard from "./AISummaryCard";
import RootCauseCard from "./RootCauseCard";
import CAPACard from "./CAPACard";
import CommitButton from "./CommitButton";

function ComplaintForm({ aiResult }) {

    const [formData, setFormData] = useState({
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
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {

        if (aiResult) {

            setFormData((prev) => ({
                ...prev,
                ...aiResult.extracted_data,
            }));

        }

    }, [aiResult]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSave = async () => {

        try {

            const payload = {

                ...formData,

                ai_summary: aiResult?.summary || "",

                ai_root_cause: aiResult?.root_cause || "",

                ai_capa: aiResult?.capa || "",

                ai_risk: aiResult?.risk || "",

            };

            await saveComplaint(payload);

            setOpenSnackbar(true);

        } catch (error) {

            console.error(error);

            console.log(error.response?.data);

            alert("Failed to save complaint.");

        }

    };

    return (

        <Box
            sx={{
                mt:4,
                pb:6,
            }}
        >

            <ComplaintHeader />

            <CustomerSection
                formData={formData}
                handleChange={handleChange}
            />

            <ProductSection
                formData={formData}
                handleChange={handleChange}
            />

            <DefectSection
                formData={formData}
                handleChange={handleChange}
            />

            <RiskAssessmentCard
                aiResult={aiResult}
            />

            <AISummaryCard
                aiResult={aiResult}
            />

            <RootCauseCard
                aiResult={aiResult}
            />

            <CAPACard
                aiResult={aiResult}
            />

            <CommitButton
                onClick={handleSave}
            />

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert
                    severity="success"
                    variant="filled"
                >
                    Complaint saved successfully!
                </Alert>
            </Snackbar>

        </Box>

    );

}

export default ComplaintForm;
