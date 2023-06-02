import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './ListaTema.css'
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Actions';


function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")
    }
  }, [token])


  async function getTema() {
    try {
      await busca("/temas", setTemas, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }


  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {temas.length === 0 ? (<div className="spinner"></div>) : (
        temas.map(tema => (
          <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#404040" }}>
            <Box marginX={20} m={2} >
              <Card variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Tema
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {tema.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))
      )}
    </>
  );
}


export default ListaTema;