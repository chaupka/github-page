import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { theme } from "../theme";
import CountDown from "./Countdown";
import FAQ from "./FAQ";
import GuestConfirmation from "./GuestConfirmation";
import Housing from "./Housing";
import Locations from "./Locations";
import OrgaTeam from "./OrgaTeam";
import Program from "./Program";
import Slideshow from "./Slideshow/Slideshow";
import convertGoogleImageUrls from "./Slideshow/convertGoogleImageUrls";
import Wishes from "./Wishes";

export function ImageLoader(props: { src: string, onload: any }) {
    const { src, onload } = props
    useEffect(() => {
        const img = new Image();
        img.referrerPolicy = 'no-referrer'
        img.onload = onload;
        img.src = src;
    }, [src, onload]);
    return null;
};

export default function Page() {
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);
    const urls = convertGoogleImageUrls(process.env.REACT_APP_GOOGLE_IMAGES);
    const images: { url: string, isLoaded: boolean }[] = []
    urls.forEach(url => images.push({ url: url, isLoaded: false }))

    const handleImageLoad = (img: { url: string, isLoaded: boolean }) => {
        img.isLoaded = true
        if (images.every(img => img.isLoaded === true)) {
            setIsImagesLoaded(true)
        }
    };

    useEffect(() => {
        window.scroll(0, 0)
        console.log('scrolling');
        
    }, [isImagesLoaded])

    return (
        <Box>
            <Stack display={'flex'} justifyContent={'center'} alignItems='center' minHeight="100vh" spacing={25} margin={'20px 0px'}>
                {isImagesLoaded ?
                    <>
                        {/* <Invitation /> */}
                        <Slideshow urls={urls} />
                        <CountDown />
                        <Locations />
                        <Program />
                        <Housing />
                        <GuestConfirmation />
                        <OrgaTeam />
                        <Wishes />
                        <FAQ />
                    </>
                    : <RotatingLines strokeColor={theme.palette.primary.main} />}
            </Stack>

            {images.map((img, index) => (
                <ImageLoader key={index} src={img.url} onload={() => handleImageLoad(img)} />
            ))}
        </Box >
    )
}