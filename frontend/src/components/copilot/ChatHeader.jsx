import SmartToyIcon from "@mui/icons-material/SmartToy";

import "./chat.css";

function ChatHeader(){

    return(

        <div className="chat-header">

            <div className="chat-header-left">

                <SmartToyIcon
                    color="primary"
                    fontSize="large"
                />

                <div>

                    <div className="chat-title">

                        AIVOA Copilot

                    </div>

                    <div className="chat-subtitle">

                        Drop complaint files or paste text below.

                    </div>

                </div>

            </div>

            <div className="online-dot"/>

        </div>

    )

}

export default ChatHeader;
