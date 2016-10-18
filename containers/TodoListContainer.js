import TodoList from '../components/TodoList'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
	return {
		todos : state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick : (index, isCompleted) => {
			isCompleted ? 
				dispatch( {type: 'UNCOMPLETE_TODO', index: index} ) : 
				dispatch( {type: 'COMPLETE_TODO', index: index} )
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);