import { Box, Container, Grid } from "@mui/material";

function AppLayout({ left, right }) {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100vh",
                overflow: "hidden",
                p: 2,
                bgcolor: "#f5f5f5",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        height: "100%",
                    }}
                >
                    <Grid
                        size={{ xs: 12, md: 7 }}
                        sx={{
                            height: "100%",
                            display: "flex",
                        }}
                    >
                        {left}
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 5 }}
                        sx={{
                            height: "100%",
                            display: "flex",
                        }}
                    >
                        {right}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default AppLayout;
