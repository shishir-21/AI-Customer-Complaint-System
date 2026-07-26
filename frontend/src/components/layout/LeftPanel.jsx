import { Card, CardContent } from "@mui/material";

function LeftPanel({ children }) {

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

export default LeftPanel;
