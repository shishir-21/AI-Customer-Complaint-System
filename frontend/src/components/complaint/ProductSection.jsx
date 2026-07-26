import {
    Grid,
    TextField,
    Typography,
} from "@mui/material";

function ProductSection({ formData, handleChange }) {

    return (

        <>

            <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mt:5, mb:2 }}
            >
                2. PRODUCT & BATCH IDENTIFICATION
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                        fullWidth
                        label="Product Name"
                        name="product_name"
                        value={formData.product_name}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                        fullWidth
                        label="Product Strength"
                        name="product_strength"
                        value={formData.product_strength}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                        fullWidth
                        label="Batch Number"
                        name="batch_number"
                        value={formData.batch_number}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                        fullWidth
                        label="Affected Quantity"
                        name="quantity_affected"
                        value={formData.quantity_affected || ""}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                        fullWidth
                        label="Manufacturing Date"
                        name="manufacturing_date"
                        value={formData.manufacturing_date || ""}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid size={{ xs:12, md:6 }}>
                    <TextField
                        fullWidth
                        label="Expiry Date"
                        name="expiry_date"
                        value={formData.expiry_date || ""}
                        onChange={handleChange}
                    />
                </Grid>

            </Grid>

        </>

    );

}

export default ProductSection;
