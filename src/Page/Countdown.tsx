import { Paper, Stack, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";

type TimeLeftProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountDown() {
    const weddingDate = moment('2025-06-14')
    const now = moment();
    const difference = weddingDate.diff(now)
    const lotrMovies = 726 * 60 * 1000
    const footballFieldRun = (2 * 105 + 2 * 68) * 5 * 60
    const beerDrank = 365 * 24 * 60 * 60 * 1000 / 88

    const calcTimeLeft = () => {
        const timeLeft: TimeLeftProps = {
            days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
            hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
            minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
            seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
        };
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calcTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft]);

    const calcWeirdTimeLeft = (weird: number) => {
        return (difference / weird).toFixed(0)
    }

    return (
        <Paper variant='elevation'>
            <Stack spacing={3}>
                <Stack spacing={2}>
                    <Typography variant="h4" fontWeight={'bold'}>Countdown</Typography>
                    <Typography variant="h5">{timeLeft.days} {timeLeft.days === 1 ? 'Tag' : 'Tage'}, {timeLeft.hours} {timeLeft.hours === 1 ? 'Stunde' : 'Stunden'},</Typography>
                    <Typography variant="h5">{timeLeft.minutes} {timeLeft.minutes === 1 ? 'Minute' : 'Minuten'}, {timeLeft.seconds} {timeLeft.seconds === 1 ? 'Sekunde' : 'Sekunden'}</Typography>
                </Stack>
                <Typography color={'text.secondary'}>ODER NOCH...</Typography>
                <Stack spacing={1} textAlign={'left'}>
                    <Typography>- {calcWeirdTimeLeft(footballFieldRun)} Fußballfelder umlaufen (wenn ihr fit seid)</Typography>
                    <Typography>- {calcWeirdTimeLeft(lotrMovies)} x alle "Herr der Ringe" Filme schauen (Extended Edition)</Typography>
                    <Typography>- {calcWeirdTimeLeft(beerDrank)} Liter Bier trinken (ø für Deutschland)</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}