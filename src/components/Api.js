import React ,{ useState,useEffect } from 'react'
import Blog from '../pages/Blog'


const Api = () => {
    const [posts,setPosts] = useState([])
  
    const fetchData = () => {
        fetch('https://blogbackend7.herokuapp.com/getPost')
        .then((res) => res.json())
        .then(data => {
            setPosts(data.posts)
        }).catch(error => console.log(error))
    }   

    useEffect(() => {
        fetchData()
    }, [])
    
    return(
        <React.Fragment>
            <Blog data={posts}/>
        </React.Fragment>
    )
}

export default Api
