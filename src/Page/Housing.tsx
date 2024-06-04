import { Paper, Stack, Typography } from "@mui/material";

export default function Housing(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Unterkunft</Typography>
                <Typography variant="h5">Hier sind die Unterkünfte</Typography>
            </Stack>
        </Paper>
    )
}