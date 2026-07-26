import ChatMessage from "./ChatMessage";

function ChatWindow({ messages }) {

    return (

        <div
            style={{
                flex: 1,
                overflowY: "auto",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
            }}
        >

            {messages.map((message, index) => (

                <ChatMessage
                    key={index}
                    role={message.role}
                    content={message.content}
                />

            ))}

        </div>

    );

}

export default ChatWindow;
