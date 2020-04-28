import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {reduxForm, Field} from 'redux-form'
import {createPost} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class PostForm extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <div className={'container'}>
                <h1>Ajoutez un post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Titre</label>
                        <Field
                            name="title"
                            component="input"
                            type="text"
                            placeholder="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description</label>
                        <Field
                            name="description"
                            component="input"
                            type="text"
                            placeholder="description"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Auteur</label>
                        <Field
                            name="author"
                            component="input"
                            type="text"
                            placeholder="author"
                        />

                    </div>
                    <Link to={`${process.env.PUBLIC_URL}`} className={' btn btn-secondary'}>Retour</Link>
                    <button type={"submit"} className={'ml-5 btn btn-primary'}>Envoyer</button>
                </form>
            </div>
        )
    }

}


export default reduxForm({
    form: 'PostForm',
})(PostForm)

