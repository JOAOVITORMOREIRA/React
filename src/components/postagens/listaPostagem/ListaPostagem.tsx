import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Listapostagem.css'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { UserState } from '../../../store/token/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/token/Actions';

function ListaPostagem() {
  const [posts, setPostagens] = useState<Postagem[]>([])

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
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

  async function getPost() {
    try {
      await busca("/postagens", setPostagens, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
      {posts.length === 0 ? (<div className="spinner"></div>) : (
        posts.map((post) => (
          <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#404040" }}>
          <Box marginX={20} m={2} className="boxPost" >
            <Card variant="outlined" style={{ backgroundColor: "white" }}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  Postado por: {post.usuario?.nome}
                </Typography>
                <Typography variant="body1" component="p">
                  Data: {Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).format(new Date(post.data))}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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
  )
}

export default ListaPostagem;
