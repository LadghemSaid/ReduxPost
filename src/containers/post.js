import React, {Component} from 'react'
import {connect} from "react-redux";
import PostContent from "../components/post-content";
import {fetchPost} from "../actions/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

class Post extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }


    render() {
        return (
            <div className="container mt-5">
                <Link className="btn btn-info" to={"/"}>Retour</Link>

                {this.props.postStore.length !== 0 ? (
                    <PostContent post={this.props.postStore}/>
                ) : (
                    <Loader
                        className="loader"
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                )
                }
            </div>
        )
    }

}

function mapStateToProps(store) {
    return {
        postStore: store.postStore.postStore,
    }
}

const mapDispatchToProps = {fetchPost}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
