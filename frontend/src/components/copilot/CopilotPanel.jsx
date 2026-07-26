import { useState } from "react";
import axios from "axios";

function CopilotPanel({ onAIResult }) {

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {

        if (!message.trim()) {
            alert("Please type a complaint.");
            return;
        }

        try {

            setLoading(true);

            const response = await axios.post(
                "http://localhost:8000/api/v1/ai/extract-text",
                {
                    text: message
                }
            );

            onAIResult(response.data);

            setMessage("");

        } catch (error) {

            console.error(error);

            alert("AI processing failed.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                height: "600px",
                display: "flex",
                flexDirection: "column",
            }}
        >

            <h2>🤖 AI Copilot</h2>

            <p>
                Type or paste a customer complaint below.
            </p>

            <textarea
                rows="12"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Customer complained that tablets were broken..."
            />

            <br />

            <button
                onClick={handleSend}
                disabled={loading}
            >

                {loading ? "Analyzing..." : "Send"}

            </button>

        </div>

    );

}

export default CopilotPanel;
