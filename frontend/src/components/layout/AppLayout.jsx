import { Grid, Container } from "@mui/material";

function AppLayout({ left, right }) {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                width: "100%",
                height: "100vh",
                px: 3,
                py: 2,
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    height: "100%",
                }}
            >
                <Grid size={{ xs: 12, md: 7 }}>
                    {left}
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                    {right}
                </Grid>
            </Grid>
        </Container>
    );
}

export default AppLayout;
