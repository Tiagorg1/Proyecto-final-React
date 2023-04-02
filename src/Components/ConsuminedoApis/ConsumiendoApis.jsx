import {useEffect, useState} from "react"

const ConsumiendoApis = () => {

    const [posts, setPosts] = useState([])

useEffect(()=>{
   const getData = fetch("https://jsonplaceholder.typicode.com/posts")
   getData
   .then((res) => res.json())
   .then((res)=>setPosts(res))
   .catch((err)=> console.log("catch: ", err))
   
},[])


  return (
    <div>ConsumiendoApis</div>
  )
}

export default ConsumiendoApis