import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
	console.log('action', action);
	console.log('current state', state);
	switch (action.type) {
		case FETCH_POSTS:
			return state;
		default:
			return state;
	}
}