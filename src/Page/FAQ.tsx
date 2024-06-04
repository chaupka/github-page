import { Paper, Stack, Typography } from "@mui/material";

export default function FAQ(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>FAQ</Typography>
                <Typography variant="h5">Fragen</Typography>
            </Stack>
        </Paper>
    )
}