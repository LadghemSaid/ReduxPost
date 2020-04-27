import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchPosts, deletePost} from "../actions/index";
import PostListItem from "../components/post-list-item";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {Transition} from 'react-transition-group';
import {Link} from 'react-router-dom';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchPosts()

    }


    renderPosts() {
        const {postsStore} = this.props

        if (postsStore) {
            return postsStore.map(p => {

                return (
                    <PostListItem key={p.id} post={p} deletePostCallBack={(post) => {
                        this.deletePostCallBack(post)
                    }}/>

                )
            })
        }


    }

    deletePostCallBack(post) {
        this.props.deletePost(post.id)

    }

    render() {
        return (
            <div className="container">
                <h1>Liste des posts</h1>
                <div className="button_add">
                    <Link to={`${process.env.PUBLIC_URL}/create-post`} className={'btn btn-primary btn-circle'}>+</Link>

                </div>
                {this.props.postsStore.length > 0 ? (
                    <table className="table table-hover table-striped">
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <Transition
                            timeout={200}
                            in={true}
                            appear={true}
                        >{(status) => {
                            return (
                                <tbody className={`fade-${status}`}>
                                {this.renderPosts()}
                                </tbody>
                            )
                        }}
                        </Transition>
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
