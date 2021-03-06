import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/fundo_login.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://github.com/guimariz">
        guimariZ
      </a>
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Grid container className={classes.root}>
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        item
        container
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: 'rgb(255, 255, 255, 0,7)',
            marginTop: 30,
            fontSize: 15,
            lineHeight: '45px',
          }}
        >
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            ></TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
            ></TextField>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => navigate('/')}
            >
              Entrar
            </Button>
            <Grid item>
              <Link>Esqueceu sua senha?</Link>
            </Grid>
            <Grid item>
              <Link>Não tem nenhuma conta? Registre-se</Link>
            </Grid>
          </form>
          <Copyright />z
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
