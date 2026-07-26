import { Card, CardContent } from "@mui/material";

function LeftPanel({ children }) {

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

export default LeftPanel;
