import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class AllPosts extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchPosts();
	}

	render() {
		console.log('AllPosts props', this.props);
		return (
			<div>
				AllPosts
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(null, { fetchPosts })(AllPosts);