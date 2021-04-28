const DATA = [
    {
        "idx": 0,
        "name": "A",
        "comment": "hello"
    },
    {
        "idx": 1,
        "name": "B",
        "comment": "hello world!"
    }
]
const fetchComments = async () => {
    return DATA
}

const sendComment = async ( name, comment ) => {
    const newData = {
        idx: DATA.length,
        name,
        comment
    } 
    DATA.push(newData)
    return DATA;
}

export default {
    fetchComments,
    sendComment
}