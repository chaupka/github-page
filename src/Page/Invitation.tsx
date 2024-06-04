import { Paper, Stack, Typography } from "@mui/material";

export default function Invitation(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Einladung</Typography>
                <Typography variant="h5">Oh hi bitte kommt zur Hochzeit</Typography>
            </Stack>
        </Paper>
    )
}