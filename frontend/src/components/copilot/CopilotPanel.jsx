import { useState } from "react";
import axios from "axios";

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

function CopilotPanel({ onAIResult }) {

    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "👋 Hi! I'm your AI Complaint Copilot.\n\nPaste a complaint or upload a PDF.\n\nI'll extract the information and automatically fill the complaint form.",
        },
    ]);

    const handleSend = async (text) => {

        // 1️⃣ Show user message immediately
        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: text,
            },
        ]);

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8000/api/v1/ai/extract-text",
                {
                    text,
                }
            );

            // 2️⃣ Update complaint form
            onAIResult(response.data);

            // 3️⃣ AI response message
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        `✅ Complaint parsed successfully!

Customer: ${response.data.extracted_data.customer_name}

Product: ${response.data.extracted_data.product_name}

Batch: ${response.data.extracted_data.batch_number}

Risk: ${response.data.risk}

The complaint form has been updated automatically.`,
                },
            ]);

        } catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "❌ Sorry, I couldn't process that complaint.",
                },
            ]);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "700px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
            }}
        >

            <h2>🤖 AI Copilot</h2>

            <ChatWindow
                messages={messages}
            />

            <ChatInput
                onSend={handleSend}
                loading={loading}
            />

        </div>

    );

}

export default CopilotPanel;
