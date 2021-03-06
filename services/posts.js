import axios from 'axios'
const baseUrl = "https://blooming-bayou-98058.herokuapp.com/api/posts"


const getAll = () =>{
  const request = axios.get(baseUrl)
  console.log("inside getAll")
  request.then(response=>(console.log(response.data)))
  const nonExisting = {
    picture :'This post does not exist',
    author: "NA",
    caption: "NA"
  }
  return request.then(response =>(response.data))
}


const create = newObject => {

  const request = axios.post(baseUrl,newObject)
  return request.then(response=>response.data)
}


const update = (id,newObject)=>{
  const request = axios.put(`${baseUrl}/${id}`,newObject)
  return request.then(response => response.data)
}

export default {getAll,create,update}