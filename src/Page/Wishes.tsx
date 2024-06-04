import { Paper, Stack, Typography } from "@mui/material";

export default function Wishes() {
    return (
        <Paper variant='elevation'>
            <Stack spacing={2}>
            <Typography variant="h4" fontWeight={'bold'}>Wünsche</Typography>
            <Typography variant="h5">Bitte gebt uns Geld</Typography>
            </Stack>
        </Paper>
    )
}