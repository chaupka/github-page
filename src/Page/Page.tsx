import { Box, Stack } from "@mui/material";
import CountDown from "./Countdown";
import Invitation from "./Invitation";
import Locations from "./Locations";
import Wishes from "./Wishes";
import Program from "./Program";
import Housing from "./Housing";
import GuestConfirmation from "./GuestConfirmation";
import OrgaTeam from "./OrgaTeam";
import FAQ from "./FAQ";

export default function Page() {
    return (
        <Box>
            {
                // Fotogalerie

                // Navigation (freeze header)
                <Stack display={'flex'} justifyContent={'center'} alignItems='center' minHeight="100vh" spacing={25}>
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

            }
        </Box >
    )
}