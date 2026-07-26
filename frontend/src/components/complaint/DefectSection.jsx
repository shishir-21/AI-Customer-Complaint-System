import {
    Grid,
    TextField,
    Typography,
} from "@mui/material";

function DefectSection({ formData, handleChange }) {

    return (

        <>

            <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mt: 5, mb: 2 }}
            >
                3. DEFECT DETAILS & INITIAL ASSESSMENT
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Complaint Type"
                        name="complaint_type"
                        value={formData.complaint_type || ""}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Initial Severity"
                        name="initial_severity"
                        value={formData.initial_severity || ""}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        label="Complaint Description"
                        name="complaint_description"
                        value={formData.complaint_description || ""}
                        onChange={handleChange}
                    />
                </Grid>

            </Grid>

        </>
    );
}

export default DefectSection;
