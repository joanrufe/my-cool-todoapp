import { mockTodos } from './mockdata'

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

let apiUrl;
if (process.env.NODE_ENV === 'production'){
    apiUrl = `${window.location.origin}/api/Items` 
}else{
    apiUrl = 'http://localhost:3000/api/Items'
}

export default {
    getAll: () => fetch(apiUrl)
        .then(handleErrors)
        .then(r => r.json()),
    postItem: item => fetch(apiUrl, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        .then(handleErrors)
        .then(res => res.json()),
    updateItem: item => fetch(apiUrl, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        .then(handleErrors)
        .then(res => res.json()),
    deleteItem: id => fetch(`${apiUrl}/${id}`, {
            method: 'delete'
        })
        .then(handleErrors)
        .then(res => res.json()),
    findOne: () => fetch(`${apiUrl}/findOne`, {
            method: 'get'
        })
        .then(handleErrors)
        .then(res => res.json())
}