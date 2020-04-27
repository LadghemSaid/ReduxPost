import axios from "axios";

export const AT_POSTS = {
    DELETE: 'DELETE_POST',
    CREATE: 'CREATE_POST',
    READ: 'READ_POST',
    READ_ALL: 'READ_ALL_POST'
};
const END_POINT = "http://jsonplaceholder.typicode.com";

export function fetchPosts() {
    return (dispatch) => {
        axios.get(`${END_POINT}/posts`).then(axiosResponse => {
            dispatch({type: AT_POSTS.READ_ALL, payload: axiosResponse.data})
        })
    }
}

export function fetchPost(id) {
    return (dispatch) => {
        axios.get(`${END_POINT}/posts/${id}`).then(axiosResponse => {
            dispatch({type: AT_POSTS.READ, payload: axiosResponse.data})
        })
    }
}

export function deletePost(id) {
    return (dispatch) => {
        axios.delete(`${END_POINT}/posts/${id}`).then(axiosResponse => {
            dispatch({type: AT_POSTS.DELETE, payload: id})
        })
    }
}

export function createPost(post) {
    return (dispatch) => {
        axios.post(`${END_POINT}/posts/`,
            {
                title:post.title,
                content:post.content,
                author:post.author

            }
        ).then(axiosResponse => {
            dispatch({type: AT_POSTS.CREATE, payload: axiosResponse.data})
        })
    }
}

