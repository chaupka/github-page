import { Paper, Stack, Typography } from "@mui/material";

export default function Program(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Programm</Typography>
                <Typography variant="h5">Hier ist das Programm</Typography>
            </Stack>
        </Paper>
    )
}