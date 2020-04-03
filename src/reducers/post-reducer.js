import {AT_POSTS} from "../actions/index"

const initialState = {
    postStore: []
}
export default function postReducer(oldState = initialState, action){
    switch (action.type) {
        case AT_POSTS.READ:
            return {
                ...oldState,
                postStore: action.payload
            }
        default:
            return oldState;

    }
}




