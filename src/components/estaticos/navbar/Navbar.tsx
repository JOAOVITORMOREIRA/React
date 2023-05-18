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
                    <Box className='cursor'>
                        <Typography variant='h5'>
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home'className='text-decorator-none'>
                            <Box mx={1}  className='cursor'>
                                <Typography variant='h6'>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                        <Typography variant='h6'>
                          Criar Postagem
                        </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                        <Typography variant='h6' >
                           Postagem
                        </Typography>
                        </Box>
                        <Box mx={1}  className='cursor'>
                        <Typography variant='h6' >
                            Temas
                        </Typography>
                        </Box>
                        <Box mx={1}  className='cursor'>
                        <Typography variant='h6'>
                            Cadastrar Temas
                        </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                        <Box mx={1}  className='cursor'>
                        <Typography variant='h6'>
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