import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class AllPosts extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			console.log('mapping post', post);
			return <li className="list-group-item" key={post.id}>{post.title}</li>
		});
	}

	render() {
		console.log('AllPosts props', this.props);
		if (!this.props.posts) {
			return <div>Loading Posts...</div>
		}
		return (
			<div>
				<h3>Current Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('current posts', state.posts);
	return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(AllPosts);