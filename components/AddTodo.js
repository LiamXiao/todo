import React,{ Component } from 'react'

class AddTodo extends Component{

	render(){
		return (
			<div>
				<input type='text' ref='input'  ></input>
				<button value='AddTodo' onClick={ (e) => this.handleClick(e) } >Add</button>
			</div>
		)
	}

	handleClick(e) {
		const node = this.refs.input
   	 	const text = node.value.trim()
   	 	this.props.onAddClick(text)
   	 	node.value = ''
	}
}

export default AddTodo;