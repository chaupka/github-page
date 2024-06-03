import { Box, Button, Input, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import gifImage from '.././media/Carsten.gif';

export default function Login(props: { checkPassword: (input: string) => void }) {
  const [input, setInput] = useState('');

  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems='center' minHeight="100vh" textAlign={'center'} spacing={1}>
      <Paper variant='elevation'>
      <Typography variant='h4'>Passwort?</Typography>
      <Box component="img" src={gifImage} alt='AnimatedGif' sx={{width:'300px', imageRendering: 'pixelated'}}/>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{gap: 2}}>
        <Input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Passwort eingeben" />
        <Button color='primary' variant='contained' onClick={() => props.checkPassword(input)}>OK</Button>
      </Box>
      </Paper>
    </Stack>
  );


}
