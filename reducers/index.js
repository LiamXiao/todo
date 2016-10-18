import { combineReducers } from 'redux'


const initTodos = 
	[
		{
			text: 'Use Redux',
			completed: true
		}, 
		{
	        text: 'Learn to connect it to React',
	        completed: false
		}
	]

const todoReducer = (state = initTodos, action) => {
	console.log('Here is the action:  ');
	console.log(action);
	switch(action.type){
		case 'ADD_TODO':
			return [ 								// new todos combined by preivous todos and new todos from action
				...state, 							// previous tods
				{									// new todos
					text: action.text, 
					completed: false
				}
			];
		case 'COMPLETE_TODO':
			return [
				...state.slice(0, action.index),	// previous todos those before completed one
				Object.assign(						// set todo to completed which had been operated
					{},
					state[action.index],
					{completed: true}
				),
				...state.slice(action.index + 1)	// previous todos those after completed one
			];
		case 'UNCOMPLETE_TODO':
			return [
				...state.slice(0, action.index),	// previous todos those before completed one
				Object.assign(						// set todo to completed which had been operated
					{},
					state[action.index],
					{completed: false}
				),
				...state.slice(action.index + 1)	// previous todos those after completed one
			];
		default:
			return state;
	}

}



const reducer = combineReducers({
	todos: todoReducer								// equivalent to todoReducer(state.todos, action)
});

export default reducer;