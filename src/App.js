import React from 'react';
import Button from '@material-ui/core/Button'
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '30px',
    marginBottom: '30px'
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: 'rgba(0,0,0,.9)'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  footer: {
    marginTop: theme.spacing(10)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>Material UI</Typography>
            <Box mr={3}>
              <Button color='inherit' variant='outlined' onClick={handleClickOpen}>Log In</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField 
                    autofocus
                    margin = 'dense'
                    id = 'name'
                    label = 'Email adress'
                    type = 'email'
                    fullWidth
                  />
                  <TextField
                    autofocus
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                  />
                  <DialogActions>
                    <Button onClick={handleClose}>Cansel</Button>
                    <Button onClick={handleClose}>Log In</Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>

            </Box>
            <Button color='secondary' variant='contained'>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component='h1'
                    variant='h3'
                    color='inherit'
                    gutterBottom
                  >
                    Material
                  </Typography>
                  <Typography
                    component='h5'
                    color='inherit'
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis nisi pretium condimentum in eget urna. Pellentesque at quam porta, porta nibh at, malesuada dui. Curabitur ac sodales ligula. Curabitur ante nulla, vestibulum in diam at, pretium finibus felis. Nulla facilisi. Nulla ornare dolor sapien, sed congue magna auctor vel. Nullam nec egestas risus. Aenean hendrerit quis sapien vitae convallis.
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className='classes.mainContent'>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Material
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis nisi pretium condimentum in eget urna. Pellentesque at quam porta, porta nibh at, malesuada dui. Curabitur ac sodales ligula.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container> 
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia 
                      className = {classes.cardMedia}
                      image = 'https://source.unsplash.com/random'
                      title = 'Image title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5' gutterBottom>
                        Material Post
                      </Typography>
                      <Typography variant='h5' gutterBottom>
                        Material Post
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>

                      <LayerIcon />
                      <PlayCircleFilledIcon />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
        <BottomNavigation 
          value={value} 
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label='Recents'
            value='recents'
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label='Favorites'
            value='favorites'
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label='Nearby'
            value='nearby'
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label='Folder'
            value='folder'
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
          Material UI test page
        </Typography>
      </footer>
    </>
  );
}

export default App;
