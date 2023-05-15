import React from "react";
import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor:"#E0AAFF" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box padding={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color:"white", fontWeight:"bold" }}>Seja Bem Vindo</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color:"white", fontWeight:"bold" }}>Expresse aqui sua raiva</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor:"white", backgroundColor:"#2A1268", color:"white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://th.bing.com/th/id/R.4d2bd7287c3f4e0ff63f6c7ac98c0c34?rik=wLAEfWze7n4tjA&pid=ImgRaw&r=0" alt="" width="600px" height="600px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor:"white"}}>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;