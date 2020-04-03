import React from 'react'
import {Link} from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const PostListItem = (props) => {
    function handleDelete() {
        props.deletePostCallBack(post)
    }

    const {post} = props
    return (
        <ReactCSSTransitionGroup
            component='tr'
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionName="item"
        >

                    <td><Link to={`post/${post.id}`}>{post.title}</Link></td>

                    <td>
                        <button onClick={() => handleDelete(post)} data-id={post.id}
                                className="btn btn-danger">Supprimer
                        </button>
                    </td>

        </ReactCSSTransitionGroup>

    )
}
export default (PostListItem)
