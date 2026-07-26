import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    LinearProgress,
    Typography,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";

const riskDetails = {
    High: {
        chipColor: "error",
        priority: "P1 - Urgent",
        nextAction: "Initiate QA investigation",
    },
    Medium: {
        chipColor: "warning",
        priority: "P2 - High",
        nextAction: "Complete QA review within 1 business day",
    },
    Low: {
        chipColor: "success",
        priority: "P3 - Routine",
        nextAction: "Document and trend the complaint",
    },
};

function RiskAssessmentCard({ aiResult }) {

    const severity = aiResult?.risk?.trim() || "Pending";
    const details = riskDetails[severity];
    const confidenceValue = Number(aiResult?.confidence);
    const confidence = Number.isFinite(confidenceValue)
        ? Math.min(100, Math.max(0, confidenceValue))
        : 0;

    return (

        <Card
            sx={{
                mt: 4,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
            }}
        >

            <CardContent sx={{ p: { xs: 2, sm: 3 }, "&:last-child": { pb: { xs: 2, sm: 3 } } }}>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2.5,
                    }}
                >
                    <SecurityIcon color="primary" />
                    AI Copilot Risk Assessment
                </Typography>

                <Grid container spacing={2.5} alignItems="stretch">

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="caption" color="text.secondary">
                            SEVERITY
                        </Typography>
                        <Box sx={{ mt: 0.75 }}>
                            <Chip
                                color={details?.chipColor || "default"}
                                label={severity}
                                size="small"
                                sx={{ fontWeight: 700, minWidth: 84 }}
                            />
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="caption" color="text.secondary">
                            PRIORITY
                        </Typography>
                        <Typography variant="body2" fontWeight={700} sx={{ mt: 1 }}>
                            {details?.priority || "Pending assessment"}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="caption" color="text.secondary">
                            CONFIDENCE
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.9 }}>
                            <LinearProgress
                                aria-label="AI confidence"
                                variant="determinate"
                                value={confidence}
                                sx={{ flexGrow: 1, height: 7, borderRadius: 4 }}
                            />
                            <Typography variant="body2" fontWeight={700}>
                                {confidence}%
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="caption" color="text.secondary">
                            SUGGESTED NEXT ACTION
                        </Typography>
                        <Typography variant="body2" fontWeight={700} sx={{ mt: 1 }}>
                            {details?.nextAction || "Await AI assessment"}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Box
                            sx={{
                                px: 1.5,
                                py: 1.25,
                                borderRadius: 2,
                                bgcolor: "action.hover",
                            }}
                        >
                            <Typography variant="caption" color="text.secondary">
                                SHORT REASON
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 0.5,
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                }}
                            >
                                {aiResult?.summary || "AI assessment pending."}
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>

            </CardContent>

        </Card>

    );
}

export default RiskAssessmentCard;
