import { Paper, Stack, Typography } from "@mui/material";

export default function Locations(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Locations</Typography>
                <Typography variant="h5">Hier sind die Maps</Typography>
            </Stack>
        </Paper>
    )
}