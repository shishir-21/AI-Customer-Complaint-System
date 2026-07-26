import { Card, CardContent } from "@mui/material";

function RightPanel({ children }) {

    return (

        <Card
            sx={{
                width: "100%",
                minWidth: 0,
                height: "95vh",
                borderRadius: 3,
            }}
        >

            <CardContent
                sx={{
                    height: "100%",
                    boxSizing: "border-box",
                    p: 0,
                }}
            >

                {children}

            </CardContent>

        </Card>

    );

}

export default RightPanel;
