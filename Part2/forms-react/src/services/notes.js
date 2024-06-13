import axios from "axios"
const baseURL = "http://localhost:3001/notes"

const getAll = () =>{
    const request = axios.get(baseURL)
    return request.then(responce => responce.data)
} 

const create = newObject =>{
    const request = axios.post(baseURL, newObject)
    return request.then(responce => responce.data)
}

const update = (id, newObject) =>{
    const request = axios.put(`${baseURL}/${id}`,newObject)
    return request.then(responce => responce.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}
