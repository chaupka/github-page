import { Paper, Stack, Typography } from "@mui/material";

export default function GuestConfirmation(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Rückmeldung</Typography>
                <Typography variant="h5">Hier könnt ihr euch anmelden</Typography>
            </Stack>
        </Paper>
    )
}