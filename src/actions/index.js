import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'key=danqzera'

export function fetchPosts() {
	const url = `${BASE_URL}/posts?${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}