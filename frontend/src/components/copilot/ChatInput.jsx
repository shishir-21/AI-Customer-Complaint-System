import { useRef, useState } from "react";

import {
    Box,
    IconButton,
    TextField,
} from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function ChatInput({ onSend, loading, onUpload }) {

    const [message, setMessage] = useState("");

    const fileInputRef = useRef(null);

    const handleSend = () => {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    };

    return (

        <Box
            sx={{
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 2.5,
                borderTop: "1px solid #E5E7EB",
                background: "#fff",
            }}
        >

            <input
                ref={fileInputRef}
                hidden
                type="file"
                accept=".pdf"
                onChange={(e) => {

                    if (e.target.files[0]) {

                        onUpload(e.target.files[0]);

                    }

                }}
            />

            <IconButton
                onClick={() => fileInputRef.current.click()}
                sx={{ flexShrink: 0 }}
            >
                <AttachFileIcon />
            </IconButton>

            <TextField
                sx={{ flex: 1, minWidth: 0 }}
                placeholder="Type a message or paste a complaint..."
                value={message}
                multiline
                maxRows={4}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {

                    if (e.key === "Enter" && !e.shiftKey) {

                        e.preventDefault();

                        handleSend();

                    }

                }}
            />

            <IconButton
                color="primary"
                disabled={loading}
                onClick={handleSend}
                sx={{
                    flexShrink: 0,
                    bgcolor: "#4F46E5",
                    color: "white",
                    "&:hover": {
                        bgcolor: "#4338CA",
                    },
                    width: 48,
                    height: 48,
                }}
            >
                <SendRoundedIcon />
            </IconButton>

        </Box>

    );

}

export default ChatInput;
