import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function GoogleImage(props: { url: string, index: number }) {
    const { url, index } = props
    return (
        <Box component={'img'} src={url} alt={`Slide ${index}${1}`} sx={{ width: '100%' }} referrerPolicy="no-referrer" />
    )
}

export default function Slideshow(props: { urls: string[] }) {
    const { urls } = props

    return (
        <>
            <Carousel autoPlay={true} interval={5000} sx={{ width: '100%' }}>
                {
                    urls.map((url, index) => <GoogleImage key={index} url={url} index={index} />)
                }
            </Carousel>
        </>
    )
}