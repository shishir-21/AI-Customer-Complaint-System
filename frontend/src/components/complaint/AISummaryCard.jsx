import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    TextField,
    Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AISummaryCard({ aiResult }) {

    return (

        <Accordion
            defaultExpanded
            sx={{ mt:3 }}
        >

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >

                <Typography
                    fontWeight="bold"
                >
                    AI Complaint Summary
                </Typography>

            </AccordionSummary>

            <AccordionDetails>

                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    value={aiResult?.summary || ""}
                    InputProps={{
                        readOnly:true,
                    }}
                />

            </AccordionDetails>

        </Accordion>

    );

}

export default AISummaryCard;
