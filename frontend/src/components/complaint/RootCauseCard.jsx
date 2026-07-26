import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    TextField,
    Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RootCauseCard({ aiResult }) {

    return (

        <Accordion sx={{ mt:2 }}>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >

                <Typography fontWeight="bold">

                    AI Root Cause

                </Typography>

            </AccordionSummary>

            <AccordionDetails>

                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={aiResult?.root_cause || ""}
                    InputProps={{
                        readOnly:true,
                    }}
                />

            </AccordionDetails>

        </Accordion>

    );

}

export default RootCauseCard;
