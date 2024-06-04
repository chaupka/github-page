import { Box, Button, Input, Paper, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import gifImage from '.././media/Carsten.gif';

const WrongPwInput = styled(Input)(({ theme }) => {
  return {
    "& ::placeholder": {
      color: theme.palette.secondary.main,
    }
  }
})

export default function Login(props: { isWrongPassword: boolean, checkPassword: (input: string) => void }) {
  const [input, setInput] = useState('');
  const { isWrongPassword, checkPassword } = props;

  const pressKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkPassword(input)
      setInput('')
    }
  }

  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems='center' minHeight="100vh">
      <Paper variant='elevation'>
        <Typography variant='h4'>Passwort?</Typography>
        <Box component="img" src={gifImage} alt='AnimatedGif' sx={{ width: '100%', maxWidth: '600px', imageRendering: 'pixelated' }} />
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ gap: 2 }}>
          {!isWrongPassword
            ? <Input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={pressKey}
              placeholder={"Passwort eingeben"}
            />
            : <WrongPwInput
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={pressKey}
              placeholder={"Falsches Passwort"}
            />}
          <Button color='primary' variant='contained' onClick={() => checkPassword(input)}>OK</Button>
        </Box>
      </Paper>
    </Stack>
  );


}
