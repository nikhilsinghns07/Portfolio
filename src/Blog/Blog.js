import React ,{useState,useEffect}  from 'react'
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,CircularProgress,Box,IconButton, AppBar,Toolbar} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import Footer from '../components/Footer'

import background from '../pics/blogbg.jpg'

import { styled, useTheme } from '@mui/material/styles';

const Blog = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  let token;

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fetchData = () => {
    setLoading(true)
    fetch('https://blogbackend7.herokuapp.com/getPost')
    .then((res) => res.json())
    .then(data => {
      setPosts(data.posts)
      setLoading(false)
      token = window.localStorage.getItem("loginToken")
      if(token != null){
        setIsLoggedIn(true)
      }
    }).catch(error => console.log(error))

  }

  useEffect(() => {
    fetchData()
  },[])

    return (
      <div style={{ backgroundImage: `url(${background})`}}>
       
        <Box>
          <AppBar  position="fixed" open={open}>
          <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }) }}>
              <MenuIcon />
              </IconButton>
        </Toolbar>
          </AppBar>
        </Box>
        {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:5}}>
            <NavLink to='/addPost'>Create a Post</NavLink>
            {isLoggedIn === true ? <Avatar>NS</Avatar> : <NavLink to='/login'>Login</NavLink>}            
        </div> */}

        { loading === true ? 
          <Box style={{textAlign:'center',padding:2}}>
            <CircularProgress /> 
            <p>Loading</p>
          </Box> : null 
        }
        
        {
          posts.map((post,idx) => 
          <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            padding:10,
          }}>
            <Card sx={{ maxWidth:'fit-content' }} key={idx} >
            <CardHeader 
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
              } 
              title={post.title} 
              subheader={post.author}
            />
            <CardMedia component="img" height="194" image={post.imageUrl} alt="Post IMG"/>
            <CardContent>
              <Typography variant="body2" color="text.secondary">{post.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="text.secondary">{new Date(post.date).toDateString()}</Typography>
              <IconButton aria-label="add to favorites"> <FavoriteIcon /> </IconButton>
              <IconButton aria-label="share"> <ShareIcon /> </IconButton>
            </CardActions>
          </Card>
          </div>
        )
        }
      <Footer />
      </div>
      
  );
}

export default Blog

