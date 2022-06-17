import React ,{useState,useEffect}  from 'react'
import {Button,Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,CircularProgress,Box,IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import Footer from '../components/Footer'
import {NavLink} from '../components/NavbarElements';
import { useHistory } from "react-router-dom";
import background from '../pics/blogbg.jpg'

const Blog = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  let token;
  let history = useHistory();

  const CreatePostValidator = () => {
    if(window.localStorage.getItem("loginToken") == null){
      history.push('/Login')
    }
    if(window.localStorage.getItem("loginToken") != null){
      history.push('/addPost')
    }
  }

  const logoutHandler = () => {
    if(isLoggedIn === true) {
        window.localStorage.removeItem("loginToken")
        window.location.reload()
    }
    if(isLoggedIn === false) {
      return;
    }
  }

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
    })

  }

  useEffect(() => {
    fetchData()
  },[])

    return (
      <div style={{ backgroundImage: `url(${background})`}}>
       
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:5}}>
            <Button variant="outlined" onClick={() => {CreatePostValidator()}}>Create Post</Button>
            {isLoggedIn === true ? <Avatar>NS</Avatar> : <NavLink to='/login'>Login</NavLink>}
            {isLoggedIn === true ? <Button onClick={() => {logoutHandler()}}>Logout</Button> : null}        
        </div>

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
            <Card sx={{ width:'100%' }} key={idx} >
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