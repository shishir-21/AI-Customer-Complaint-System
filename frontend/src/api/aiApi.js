import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const uploadComplaintPDF = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/api/v1/ai/extract",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};
