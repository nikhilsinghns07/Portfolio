import React ,{ useState,useEffect } from 'react'
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
import background from '../pics/background.jpg'

const Blog = () => {
  const [data,setData] = useState({})
  
    const fetchData = () => {
        fetch('https://blogbackend7.herokuapp.com/getPost').then((res) => res.json())
        .then(response => {
          setData(response)
          console.log(data)
        }).catch(error => console.log(error))
    }   

    useEffect(() => {
        fetchData()
    }, [])
    

    return (
      <React.Fragment>
        
          <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
            title={data.title}
            subheader="Date of Post Created"
          />
          <CardMedia component="img" height="194" image={background} alt="Paella dish"/>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Post 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
          </CardActions>
  
        </Card>
       
      </React.Fragment>
    );
  
}

export default Blog

