import React, { Component, PropTypes } from 'react'

export default class Todo extends Component{

	render(){
		return(
			<li onClick={ this.props.onTodoClick } 
				style={{
		          textDecoration: this.props.completed ? 'line-through' : 'none',
		          cursor: this.props.completed ? 'default' : 'pointer'
       			}}
			>
				{this.props.text}
				{this.props.completed}
			</li>
		);
	}

}

Todo.propTypes = {
	text : PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onTodoClick : PropTypes.func.isRequired
}