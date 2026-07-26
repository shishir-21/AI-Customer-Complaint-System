import {
    Box,
    Chip,
    Divider,
    Typography,
} from "@mui/material";

function ComplaintHeader() {

    return (

        <>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >

                <Box>

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                    >
                        Log Customer Complaint
                    </Typography>

                    <Typography
                        color="text.secondary"
                    >
                        API & FDF Quality Assurance Module
                    </Typography>

                </Box>

                <Chip
                    color="success"
                    label="Ready to Commit"
                />

            </Box>

            <Divider sx={{ mt:3, mb:4 }}/>

        </>

    );

}

export default ComplaintHeader;
