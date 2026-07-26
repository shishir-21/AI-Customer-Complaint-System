import { Card, CardContent } from "@mui/material";

function RightPanel({ children }) {

    return (

        <Card
            sx={{
                height: "100%",
            }}
        >

            <CardContent>

                {children}

            </CardContent>

        </Card>

    );

}

export default RightPanel;
