import { Paper, Stack, Typography } from "@mui/material";

export default function OrgaTeam(){
    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Orga-Team</Typography>
                <Typography variant="h5">Bei denen könnt ihr euch melden</Typography>
            </Stack>
        </Paper>
    )
}