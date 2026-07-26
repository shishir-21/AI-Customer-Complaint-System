import { useEffect, useState } from "react";

import { saveComplaint } from "../../api/complaintApi";

function ComplaintForm({ aiResult }) {

    const [formData, setFormData] = useState({
        customer_name: "",
        product_name: "",
        product_strength: "",
        batch_number: "",
        complaint_description: "",
        initial_severity: "",
    });

    useEffect(() => {

        if (aiResult) {
            setFormData(aiResult.extracted_data);
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
                complaint_source: "AI Upload",

                ...formData,

                ai_summary: aiResult.summary,
                ai_root_cause: aiResult.root_cause,
                ai_capa: aiResult.capa,
                ai_risk: aiResult.risk,
            };

            console.log(payload);

            const response = await saveComplaint(payload);

            alert("Complaint saved successfully!");

            console.log(response);

        } catch (error) {

            console.error(error);

            console.log(error.response?.data);

            alert("Failed to save complaint.");

        }

    };

    return (
        <div style={{ marginTop: "40px" }}>

            <h2>Complaint Form</h2>

            <div>

                <label>Customer Name</label>
                <br />

                <input
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Product Name</label>
                <br />

                <input
                    type="text"
                    name="product_name"
                    value={formData.product_name}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Product Strength</label>
                <br />

                <input
                    type="text"
                    name="product_strength"
                    value={formData.product_strength}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Batch Number</label>
                <br />

                <input
                    type="text"
                    name="batch_number"
                    value={formData.batch_number}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Complaint Description</label>
                <br />

                <textarea
                    rows="5"
                    cols="60"
                    name="complaint_description"
                    value={formData.complaint_description}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Initial Severity</label>
                <br />

                <input
                    type="text"
                    name="initial_severity"
                    value={formData.initial_severity}
                    onChange={handleChange}
                />

            </div>

            <br />

            <button onClick={handleSave}>
                Save Complaint
            </button>

        </div>
    );
}

export default ComplaintForm;
