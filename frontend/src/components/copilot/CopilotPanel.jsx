import { useState } from "react";
import axios from "axios";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

import "./chat.css";

function CopilotPanel({
    currentForm,
    hasActiveDraft,
    onExtraction,
    onDraftUpdate,
}) {

    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! Upload a complaint or paste a complaint.",
        },
    ]);

    const addAssistantMessage = (content) => {

        setMessages((prev) => [
            ...prev,
            { role: "assistant", content },
        ]);

    };

    const handleSend = async (text) => {

        setMessages((prev) => [
            ...prev,
            { role: "user", content: text },
        ]);

        try {

            setLoading(true);

            if (hasActiveDraft) {

                const response = await axios.post(
                    "http://localhost:8000/api/v1/ai/update-draft",
                    {
                        current_form: currentForm,
                        message: text,
                    }
                );

                onDraftUpdate(response.data.changes);
                addAssistantMessage(response.data.reply);

            } else {

                const response = await axios.post(
                    "http://localhost:8000/api/v1/ai/extract-text",
                    {
                        current_form: currentForm,
                        text,
                    }
                );

                onExtraction(response.data);
                addAssistantMessage("Complaint parsed successfully.");

            }

        } catch (error) {

            console.error(error);
            addAssistantMessage("Sorry, I couldn't process that request.");

        } finally {

            setLoading(false);

        }

    };

    const handlePdfUpload = async (file) => {

        const formData = new FormData();
        formData.append("file", file);

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8000/api/v1/ai/extract",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            onExtraction(response.data);
            addAssistantMessage("Complaint parsed successfully.");

        } catch (error) {

            console.error(error);
            addAssistantMessage("Sorry, I couldn't process that file.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="copilot-container">
            <ChatHeader />
            <ChatWindow messages={messages} />
            <ChatInput
                onSend={handleSend}
                loading={loading}
                onUpload={handlePdfUpload}
            />
        </div>

    );
}

export default CopilotPanel;
