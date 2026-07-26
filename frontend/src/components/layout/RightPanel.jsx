import { Card, CardContent } from "@mui/material";

function RightPanel({ children }) {

    return (

        <Card
            sx={{
                height: "95vh",
                borderRadius: 3,
            }}
        >

            <CardContent>

                {children}

            </CardContent>

        </Card>

    );

}

export default RightPanel;
