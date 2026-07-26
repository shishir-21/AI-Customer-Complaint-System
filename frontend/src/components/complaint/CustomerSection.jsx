import {
    Grid,
    TextField,
    Typography,
} from "@mui/material";

function CustomerSection({ formData, handleChange }) {

    return (
        <>
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mb: 2 }}
            >
                1. ORIGIN & CUSTOMER DETAILS
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Complaint Source"
                        name="complaint_source"
                        value={formData.complaint_source || ""}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Customer Name"
                        name="customer_name"
                        value={formData.customer_name || ""}
                        onChange={handleChange}
                    />
                </Grid>

            </Grid>
        </>
    );
}

export default CustomerSection;
