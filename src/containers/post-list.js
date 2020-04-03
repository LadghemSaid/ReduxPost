import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchPosts, deletePost} from "../actions/index";
import PostListItem from "../components/post-list-item";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {
    CSSTransition,

    TransitionGroup,

} from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class PostList extends Component {


    componentDidMount() {
        this.props.fetchPosts()

    }

    renderPosts() {
        const {postsStore} = this.props

        return postsStore.map(p => {
            return (



                    <PostListItem key={p.id} post={p} deletePostCallBack={(post) => {
                        this.deletePostCallBack(post)
                    }}/>

            )
        })

    }

    deletePostCallBack(post) {
        this.props.deletePost(post.id)
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1>Liste des posts</h1>
                {this.props.postsStore ? (
                    <table className="table table-hover table-striped">
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody >

                            {this.renderPosts()}
                        </tbody>
                    </table>) : (
                    <Loader
                        className='loader'
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={0} //3 secs

                    />
                )}

            </div>
        )
    }


}

function mapStateToProps(store) {
    return {
        postsStore: store.postsStore
    }
}

const mapDispatchToProps = {
    fetchPosts,
    deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
