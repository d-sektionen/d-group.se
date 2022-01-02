import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function Frågor ({user}) {
    return(
        <Box >
            <Grid>
                <Typography variant='h6' guttomButtom>
                    Årgång? {user.age}
                </Typography>
                <Typography variant='h6' guttomButtom>
                    Hemhemma? {user.home}
                </Typography>
                <Typography variant='h6' guttomButtom>
                    Styrkor? {user.pors}
                </Typography>
                <Typography variant='h6' guttomButtom>
                    Svagheter? {user.cons}
                </Typography>
                <Typography variant='h6' guttomButtom>
                    Civiltillstånd? {user.relation}
                </Typography>
                <Typography variant='h6' guttomButtom>
                    Partytrick? {user.party}
                </Typography>
            </Grid>
        </Box>
    )
}