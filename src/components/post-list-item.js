import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Transition} from 'react-transition-group';


class PostListItem extends Component {
    constructor() {
        super();
        this.state = {
            transition: false
        }

    }

    handleDelete() {

        this.setState({
                transition: true
            }, () => {
                setTimeout(function () {
                    this.props.deletePostCallBack(this.props.post)
                }.bind(this), 200);

            }
        )
    }


    componentDidMount() {
        const {post} = this.props

    }

    render() {

        return (
            <Transition
                timeout={200}
                in={!this.state.transition}
            >{(status) => {
                return (<tr className={`fade-${status}`}>
                    <td><Link to={`${process.env.PUBLIC_URL}/post/${this.props.post.id}`}>{this.props.post.title}</Link>
                    </td>

                    <td>
                        <button onClick={() => this.handleDelete(this.props.post)} data-id={this.props.post.id}
                                className="btn btn-danger">Supprimer
                        </button>
                    </td>
                </tr>)
            }}
            </Transition>


        )
    }

}

export default (PostListItem)
