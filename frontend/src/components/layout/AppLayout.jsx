import { Grid } from "@mui/material";

function AppLayout({ left, right }) {

    return (
        <Grid
            container
            spacing={3}
            sx={{
                p: 3,
                height: "100vh",
            }}
        >

            <Grid size={{ xs: 12, md: 7 }}>
                {left}
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
                {right}
            </Grid>

        </Grid>
    );

}

export default AppLayout;
