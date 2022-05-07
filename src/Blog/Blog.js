import React ,{useState,useEffect}  from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {NavLink} from '../components/NavbarElements'
import Footer from '../components/Footer'
import { Button } from '@mui/material';

const Blog = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch('https://blogbackend7.herokuapp.com/getPost')
    .then((res) => res.json())
    .then(data => {
      setPosts(data.posts)
      setLoading(false)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

    return (
      <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:5}}>
          <Button>Create a Post</Button>
          <NavLink to='/login'>Login</NavLink>
        </div>
        <hr style={{height:3}}/>
        { loading ? 
          <Box style={{textAlign:'center',padding:2}}>
            <CircularProgress /> 
            <p>Loading</p>
          </Box> : 
          null 
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

