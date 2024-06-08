import { Box, Button, FormControl, NativeSelect, Paper, Stack, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { theme } from "../theme";

type FormProps = {
    name: string,
    isComing: boolean,
    hasPartner: boolean,
    children: number,
    message: string
}

export default function GuestConfirmation() {

    const initialFormData: FormProps = {
        name: '',
        isComing: false,
        hasPartner: false,
        children: 0,
        message: ''
    }
    const [formData, setFormData] = useState<FormProps>(initialFormData);
    const [isSending, setIsSending] = useState<boolean>(false)
    const [response, setResponse] = useState<string | null>(null);

    const handleChangeText: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);

        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked
        }));
        if (name === 'isComing') {
            setFormData((prevData) => ({
                ...prevData,
                hasPartner: false,
                children: 0,
            }))
        }
    };

    const handleChangeChildren: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        console.log(e.target);

        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: parseInt(value)
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            setIsSending(true)
            const res = await axios.post(process.env.REACT_APP_GOOGLE_SCRIPT_WEB_APP_URL!, formData, {
                headers: { "Content-Type": "text/plain" }
            });
            setIsSending(false)
            setFormData(initialFormData)
            setResponse(res.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Rückmeldung</Typography>
                <Stack
                    spacing={2}
                    alignItems={"center"}
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h6" >Finde deinen Namen in der Liste</Typography>
                    <Typography >(oder den des Partners/ der Partnerin)</Typography>
                    {!response && <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto', mt: 3 }}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChangeText}
                            required
                        />
                        <Stack width={'600px'} spacing={1}>
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                <Typography>
                                    Ich komme zur Feier
                                </Typography>
                                <Switch name="isComing" value={formData.isComing} onChange={handleToggle} />
                            </Box>
                            {formData.isComing &&
                                <>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                        <Typography>
                                            mit Partner(in)
                                        </Typography>
                                        <Switch name="hasPartner" value={formData.hasPartner} onChange={handleToggle} />
                                    </Box>
                                    <Box display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                        <Typography>
                                            mit
                                        </Typography>
                                        <FormControl sx={{ width: '40px', padding: '0px', margin: '0px 7px' }}>
                                            <NativeSelect
                                                name="children"
                                                value={formData.children}
                                                onChange={handleChangeChildren}
                                                variant="standard"
                                            >
                                                <option value={0}>0</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <Typography>
                                            {formData.children === 1 ? 'Kind' : 'Kindern'}
                                        </Typography>
                                    </Box>
                                </>
                            }
                        </Stack>
                        <TextField
                            label="Sonstiges"
                            variant="outlined"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChangeText}
                        />
                    </Box>}
                    <Box>
                        {isSending ? <RotatingLines strokeColor={theme.palette.primary.main} width="50px" /> :
                            <>
                                <Button variant="contained" color="primary" type="submit" disabled={formData.name.length === 0}>Absenden</Button>
                                {response && (
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        {response === 'Data saved' ? 'Erfolgreich abgesendet!' : 'Fehler beim Senden.'}
                                    </Typography>
                                )}
                            </>
                        }
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    )
}