import AddTodo from '../components/AddTodo'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		todos : state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick : (text) => {
			dispatch( {type:'ADD_TODO',text:text} ) 	
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);