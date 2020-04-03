import {AT_POSTS} from "../actions/index"

export default function postsReducer(oldState = [], action) {
    switch (action.type) {
        case AT_POSTS.READ_ALL:
            return action.payload
        case AT_POSTS.DELETE:
            return oldState.filter(p => {
                if (p.id === action.payload) {
                    return false
                } else {
                    return true
                }
            })

        default:
            return oldState;

    }
}




