import React, {Component} from 'react'
import {connect} from "react-redux";

class PostForm extends Component {


    componentDidMount() {

    }


    render() {

        return (
            <div>
            <h1>Ajoutez un post</h1>
            </div>
        )
    }


}

function mapStateToProps(store) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
