import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position='static' style={{ backgroundColor:"#2A1268" }}>
                <Toolbar variant='dense'>
                    <Box style={{ cursor: "pointer"}}>
                        <Typography variant='h5' color='inherit'>
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' color='inherit'>
                            Home
                        </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' color='inherit'>
                           Postagem
                        </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' color='inherit'>
                            Temas
                        </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' color='inherit'>
                            Cadastrar Temas
                        </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' color='inherit'>
                            Logout
                        </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;