import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {reduxForm} from "redux-form";
import {createPost} from "../actions";
import {bindActionCreators} from "redux";

const formConfig ={
    form:"createPostForm",
    fields:['title','description','author']
}

class PostForm extends Component {


    componentDidMount() {

    }


    render() {

        console.log(this.props)
        const {fields} = this.props;
        return (
            <div className={'container'}>
                <h1>Ajoutez un post</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Titre</label>
                        <input type="text" className="form-control"  {...fields.title}/>
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description</label>
                        <input type="textarea" className="form-control" {...fields.description}/>
                        <div></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Auteur</label>
                        <input type="textarea" className="form-control" {...fields.author}/>
                        <div></div>
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}`} className={' btn btn-secondary'}>Retour</Link>
                    <button type={"submit"} className={'ml-5 btn btn-primary'}>Envoyer</button>
                </form>
            </div>
        )
    }


}

function mapStateToProps(store) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(PostForm))
