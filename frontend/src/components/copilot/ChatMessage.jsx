function ChatMessage({ role, content }) {

    const isUser = role === "user";

    return (

        <div
            style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                marginBottom: "15px",
            }}
        >

            <div
                style={{
                    maxWidth: "94%",
                    padding: "12px",
                    borderRadius: "12px",
                    backgroundColor: isUser ? "#4F46E5" : "#F3F4F6",
                    color: isUser ? "white" : "black",
                    whiteSpace: "pre-wrap",
                }}
            >

                {content}

            </div>

        </div>

    );

}

export default ChatMessage;
