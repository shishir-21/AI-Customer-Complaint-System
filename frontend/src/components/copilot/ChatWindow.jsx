import ChatMessage from "./ChatMessage";

function ChatWindow({ messages }) {

    return (

        <div className="chat-window">

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
