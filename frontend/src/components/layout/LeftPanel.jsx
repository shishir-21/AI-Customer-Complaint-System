import { Card, CardContent } from "@mui/material";

function LeftPanel({ children }) {
    return (
        <Card
            sx={{
                height: "100%",
                width: "100%",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardContent
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    p: 3,

                    "&::-webkit-scrollbar": {
                        width: 8,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#c1c1c1",
                        borderRadius: 10,
                    },
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
}

export default LeftPanel;
