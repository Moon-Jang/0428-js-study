const localStorage_KEY = "comments" 
const fetchComments = () => {
    return fetch("../data/comments.json")
    .then( response => {
        const data = response.json()
        localStorage.setItem(localStorage_KEY,data)
        return data
    });
}

const sendComments = ( name, comment) => {
    const data = JSON.parse(localStorage.getItem(localStorage_KEY));
    const newData = {
        idx: data.length,
        name,
        comment
    } 
    data.push(newData)
    localStorage.setItem(localStorage_KEY,data)
    return data;
}

export default {
    fetchComments,
    sendComments
}