import { Box, Button, FormControl, NativeSelect, Paper, Stack, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { theme } from "../theme";

type ChildrenProps = {
    name: string,
    age: number
}

type FormProps = {
    name: string,
    isComing: boolean,
    hasPartner: boolean,
    partnerName: string,
    children: ChildrenProps[],
    message: string
}

export default function GuestConfirmation() {

    const initialFormData: FormProps = {
        name: '',
        isComing: false,
        hasPartner: false,
        partnerName: '',
        children: [],
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
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked
        }));
        if (name === 'isComing') {
            setFormData((prevData) => ({
                ...prevData,
                hasPartner: false,
                partnerName: '',
                children: [],
            }))
        }
        if (name === 'hasPartner') {
            setFormData((prevData) => ({
                ...prevData,
                partnerName: '',
            }))
        }
    };

    const handleChangeChildrenNumber: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const { name, value } = e.target;
        const numberOfChildren = parseInt(value);
        setFormData((prevData) => {
            const newChildren = [...prevData.children];
            newChildren.splice(numberOfChildren)
            for (let i = 0; i < (numberOfChildren - prevData.children.length); i++) {
                newChildren.push({ name: '', age: 0 })
            }
            return {
                ...prevData,
                [name]: newChildren
            }
        });
    };

    const handleChangeChildrenName = (e: any, index: number) => {
        const { value } = e.target;
        setFormData((prevData) => {
            const newChildren = [...prevData.children];
            newChildren[index].name = value;
            return {
                ...prevData,
                children: newChildren
            }
        });
    };

    const handleChangeChildrenAge = (e: any, index: number) => {
        const { value } = e.target;
        const ageOfChild = parseInt(value);
        setFormData((prevData) => {
            const newChildren = [...prevData.children];
            newChildren[index].age = ageOfChild;
            return {
                ...prevData,
                children: newChildren
            }
        });
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
            <Stack
                spacing={2}
                alignItems={"center"}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography variant="h4" fontWeight={'bold'}>Rückmeldung</Typography>
                {!response
                    ? <>
                        <Box>
                            <Typography variant="h6" >Kommst du zur Feier?</Typography>
                            <Typography variant="body2">(Du kannst uns natürlich auch so Bescheid geben, Carsten hatte einfach Bock darauf diese Form zu bauen.)</Typography>
                        </Box>
                        <Stack spacing={3} width={"100%"}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={formData.name}
                                onChange={handleChangeText}
                                required
                            />
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                <Typography>
                                    Jop, ich komme
                                </Typography>
                                <Switch name="isComing" value={formData.isComing} onChange={handleToggle} />
                            </Box>
                            {formData.isComing &&
                                <>
                                    <Stack spacing={1}>
                                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                            <Typography>
                                                mit Partner(in)
                                            </Typography>
                                            <Switch name="hasPartner" value={formData.hasPartner} onChange={handleToggle} />
                                        </Box>
                                        {formData.hasPartner &&
                                            <TextField
                                                label="Name"
                                                variant="outlined"
                                                name="partnerName"
                                                value={formData.partnerName}
                                                onChange={handleChangeText}
                                                required />
                                        }
                                    </Stack>
                                    <Stack spacing={1}>
                                        <Box display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                            <Typography>
                                                mit
                                            </Typography>
                                            <FormControl sx={{ width: '40px', padding: '0px', margin: '0px 7px 0px 10px' }}>
                                                <NativeSelect
                                                    name="children"
                                                    value={formData.children.length}
                                                    onChange={handleChangeChildrenNumber}
                                                    variant="standard"
                                                >
                                                    {Array.from(Array(4).keys())
                                                        .map((num, index) =>
                                                            <option key={index} value={num}>{num}</option>)}
                                                </NativeSelect>
                                            </FormControl>
                                            <Typography>
                                                {formData.children.length === 1 ? 'Kind' : 'Kindern'}
                                            </Typography>
                                        </Box>
                                        {formData.children.map((child, index) => (
                                            <Box key={index} display={'flex'} flexDirection={'row'} alignItems={"center"}>
                                                <TextField
                                                    label={`Name Kind ${index + 1}`}
                                                    variant="outlined"
                                                    name="child.name"
                                                    value={child.name}
                                                    fullWidth
                                                    onChange={(e) => handleChangeChildrenName(e, index)}
                                                    required />
                                                <FormControl sx={{ width: '50px', padding: '0px', margin: '0px 7px 0px 10px' }}>
                                                    <NativeSelect
                                                        name="children.age"
                                                        value={child.age}
                                                        onChange={(e) => handleChangeChildrenAge(e, index)}
                                                        variant="standard"
                                                    >
                                                        {Array.from(Array(18).keys())
                                                            .map((num, index) =>
                                                                <option key={index} value={num}>{num}</option>)}
                                                    </NativeSelect>
                                                </FormControl>
                                                <Typography width={'60px'} textAlign={'left'}>
                                                    {child.age === 1 ? 'Jahr' : 'Jahre'}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </>
                            }
                            <TextField
                                label="Sonstiges"
                                variant="outlined"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChangeText}
                            />
                            <Box>
                                {isSending ? <RotatingLines strokeColor={theme.palette.primary.main} width="50px" /> :
                                    <>
                                        <Button
                                            variant="contained"
                                            color="primary" type="submit"
                                            disabled={formData.name.length === 0 || (formData.hasPartner && formData.partnerName.length === 0) || formData.children.some((child => child.name.length === 0))}>
                                            Absenden
                                        </Button>
                                    </>
                                }
                            </Box>
                        </Stack>
                    </>
                    : (
                        <Typography color={'text.secondary'}>
                            {response === 'Data saved' ? 'Erfolgreich abgesendet!' : 'Fehler beim Senden.'}
                        </Typography>
                    )}
            </Stack>
        </Paper>
    )
}