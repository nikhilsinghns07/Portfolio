import React ,{useState,useEffect}  from 'react'
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,CircularProgress,Box,Button,IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import Footer from '../components/Footer'
import BlogHeader from './BlogHeader'

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
        {/* <BlogHeader />
        <hr style={{height:3}}/> */}

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

