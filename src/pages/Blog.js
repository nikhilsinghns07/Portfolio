import React  from 'react'
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


const Blog = ({data}) => {
    return (
      <div>
        {
          data.map((post,idx) => 
          <Card sx={{ maxWidth: 345 }} key={idx}>
          <CardHeader 
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
            } 
            title={post.title} 
            subheader={post.date}
          />
          <CardMedia component="img" height="194" image={post.imageUrl} alt="Post IMG"/>
          <CardContent>
            <Typography variant="body2" color="text.secondary">{post.content}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Typography variant="body2" color="text.secondary">{post.date}</Typography>
            <IconButton aria-label="add to favorites"> <FavoriteIcon /> </IconButton>
            <IconButton aria-label="share"> <ShareIcon /> </IconButton>
          </CardActions>
      
        </Card>)
        }
      </div>
  );
}

export default Blog

