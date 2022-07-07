import React, { useState } from 'react'
import {Card,Alert,CircularProgress,CardActions,Button,CardContent,CardMedia,Typography,TextField,Select,Box,InputLabel,FormControl,MenuItem} from '@mui/material'
import bg from '../pics/addpostbg.jpg'
import { useHistory } from "react-router-dom";

const EditPost = () => {
    let history = useHistory();
    let error , success
    const [updatedContent,setContent] = useState('')
    const [updatedTitle,setTitle] = useState('')
    const [UpdatedUrl,setUrl] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    let editposttoken

    editposttoken = window.localStorage.getItem('editposttoken')
    
    const editPostHandler = () => {
        setIsLoading(true)
        fetch("https://blogbackend7.herokuapp.com/editpost",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "postId" : editposttoken,
                "title" : updatedTitle,
                "content": updatedContent,
                "imageUrl" : UpdatedUrl
            })
        }).then(res => res.json())
        .then(data => {
            error = data.error
            success = data.success
            setErrorMessage(error)
            if(error) {
                return
            }
        })
    }

    const cancelButtonHandler = () => {
        history.push('/userpost')
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return(
        <React.Fragment>
            <Card sx={{margin:4}}>
                <CardMedia component="img" height="400" image={bg} alt="bg image"/>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                        {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                </div>

                {isLoading ? <CircularProgress /> : null}

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>Make Changes to Your Post</Typography>
                    <div style={{display:'flex',flexDirection:'column',width:'80%',marginLeft:'10%'}}>
                                        
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">What you want to change</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            label="What You Want to Change"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Title</MenuItem>
                            <MenuItem value={20}>Content</MenuItem>
                            <MenuItem value={30}>ImageUrl</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
        
                        <TextField id="filled-basic" label="Title For Your Post" variant="filled" value={updatedTitle} onChange={(e) => setTitle(e.target.value)}/> <br />
                        <TextField id="filled-basic" label="Content" variant="filled"  multiline value={updatedContent} onChange={(e) => setContent(e.target.value)}/> <br />
                        <TextField id="filled-basic" label="ImageUrl (Optional)" variant="filled" value={UpdatedUrl} onChange={(e) => setUrl(e.target.value)}/> <br />
                    </div>
                    
                </CardContent>

                <CardActions>
                    <Button size="large" color="error" variant='outlined' onClick={() => {cancelButtonHandler()}}>Cancel</Button>
                    <Button size="large" color="primary" variant='contained' onClick={() => {editPostHandler()}}>Save Changes</Button>
                </CardActions>
            </Card>
            
        </React.Fragment>
    )
}

export default EditPost
