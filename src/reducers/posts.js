import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	console.log('action', action);
	console.log('current state', state);
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, (post, arrayIndex) => {
				return post.id;
			});
		default:
			return state;
	}
}