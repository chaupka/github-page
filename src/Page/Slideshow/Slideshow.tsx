import { Box, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function GoogleImage(props: { url: string, index: number }) {
    const { url, index } = props
    return (
        <Box component={'img'} src={url} alt={`Slide ${index}${1}`} sx={{ width: '100%', borderRadius: '16px' }} referrerPolicy="no-referrer" />
    )
}

export default function Slideshow(props: { urls: string[] }) {
    const { urls } = props

    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Einladung</Typography>
                <Typography variant="h5">Oh hi bitte kommt zur Hochzeit</Typography>
            </Stack>
            <Carousel interval={5000} animation={'slide'} duration={500} sx={{ width: '100%' }}>
                {
                    urls.map((url, index) => <GoogleImage key={index} url={url} index={index} />)
                }
            </Carousel>
        </Paper>
    )
}