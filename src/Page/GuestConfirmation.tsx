import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function GuestConfirmation() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [response, setResponse] = useState<any>(null);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.REACT_APP_GOOGLE_SCRIPT_WEB_APP_URL!, formData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    // 'Content-Type': 'text/plain;charset=utf-8',
                },
            });
            setResponse(res.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <Paper variant="elevation">
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={'bold'}>Rückmeldung</Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto', mt: 5 }}
                >
                    <Typography variant="h4" component="h1">Contact Us</Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                    {response && (
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            {response.result === 'success' ? 'Form submitted successfully!' : 'Error submitting form.'}
                        </Typography>
                    )}
                </Box>
            </Stack>
        </Paper>
    )
}