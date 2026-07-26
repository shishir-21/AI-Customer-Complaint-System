import { Button } from "@mui/material";

function CommitButton({ onClick }) {

    return (

        <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            sx={{
                mt:4,
                py:2,
                fontSize:"18px",
                borderRadius:3,
            }}
            onClick={onClick}
        >

            Commit to QMS Ledger

        </Button>

    );

}

export default CommitButton;
