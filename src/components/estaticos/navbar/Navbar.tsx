import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position='static' style={{ backgroundColor:"#739682" }}>
                <Toolbar variant='dense'>
                    <Box style={{ cursor: "pointer"}}>
                        <Typography variant='h5' style={{ color:"black" }}>
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home'className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant='h6' style={{ color:"black"}}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' style={{ color:"black"}}>
                          Criar Postagem
                        </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' style={{ color:"black"}}>
                           Postagem
                        </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' style={{ color:"black"}}>
                            Temas
                        </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' style={{ color:"black"}}>
                            Cadastrar Temas
                        </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant='h6' style={{ color:"black"}}>
                            Logout
                        </Typography>
                        </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;