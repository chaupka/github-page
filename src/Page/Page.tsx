import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import CountDown from "./Countdown";
import FAQ from "./FAQ";
import GuestConfirmation from "./GuestConfirmation";
import Housing from "./Housing";
import Invitation from "./Invitation";
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
            console.log('setting true');
            setIsImagesLoaded(true)
        }
    };

    return (
        <Box>
            {isImagesLoaded ?
                <Stack display={'flex'} justifyContent={'center'} alignItems='center' minHeight="100vh" spacing={25}>
                    <Slideshow urls={urls} />
                    <Invitation />
                    <CountDown />
                    <Locations />
                    <Program />
                    <Housing />
                    <GuestConfirmation />
                    <OrgaTeam />
                    <Wishes />
                    <FAQ />
                </Stack>
                : <>Loading...</>
            }
            {images.map((img, index) => (
                <ImageLoader key={index} src={img.url} onload={() => handleImageLoad(img)} />
            ))}
        </Box >
    )
}