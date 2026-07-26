import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    TextField,
    Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CAPACard({ aiResult }) {

    return (

        <Accordion sx={{ mt:2 }}>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >

                <Typography fontWeight="bold">

                    AI CAPA Recommendation

                </Typography>

            </AccordionSummary>

            <AccordionDetails>

                <TextField
                    fullWidth
                    multiline
                    rows={8}
                    value={aiResult?.capa || ""}
                    InputProps={{
                        readOnly:true,
                    }}
                />

            </AccordionDetails>

        </Accordion>

    );

}

export default CAPACard;
