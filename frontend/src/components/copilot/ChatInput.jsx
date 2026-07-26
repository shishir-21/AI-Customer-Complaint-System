import { useState } from "react";

function ChatInput({ onSend, loading }) {

    const [message, setMessage] = useState("");

    const handleSend = () => {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    };

    return (

        <div
            style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
            }}
        >

            <textarea
                rows="3"
                style={{ flex: 1 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type complaint..."
            />

            <button
                onClick={handleSend}
                disabled={loading}
            >
                Send
            </button>

        </div>

    );

}

export default ChatInput;
