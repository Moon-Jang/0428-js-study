const fetchComments = () => {
    return fetch("../data/comments.json")
    .then( response => response.json())
}

const sendComments = () => {
    
}
export default {
    fetchComments
}