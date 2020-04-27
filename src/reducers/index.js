import {combineReducers} from "redux";
import postsReducer from './posts-reducer'
import postReducer from './post-reducer'
import {reducer as ReducerForm} from 'redux-form'

//Il faut autant de reducer qu'on veut de variable dans le store PARCONTRE un reducer peux avoir plusieur action dans son store pour CREE / MODIFIER / SUPPRIMER / UPDATER
//Exemple Le reducer des posts ici peut supprimer un post  et recuperer tous les posts alors que l'autre n'en recupere qu'un seule et le stock dans la variable postStore
const rootReducer = combineReducers({
    postsStore:postsReducer,
    postStore:postReducer,
    form:ReducerForm
})
export default rootReducer;
