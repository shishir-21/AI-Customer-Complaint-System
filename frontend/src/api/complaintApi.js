import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const saveComplaint = async (complaintData) => {

    const response = await api.post(
        "/api/v1/complaints",
        complaintData
    );

    return response.data;
};
