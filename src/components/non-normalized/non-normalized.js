import React, { Component } from 'react';
import { CommentCard } from '../comment-card/comment-card';
import './non-normalized.css';

export class NonNormalized extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: [
				{
					id: 893,
					editing: false,
					text: 'Hey I think this is pretty cool',
					date: 'Jan 24, 2019',
					author: {
						id: 45,
						name: 'Jake Budge',
						userName: 'jbudge3'
					}
				},
				{
					id: 946,
					editing: false,
					text: `No way, it's only kind of cool`,
					date: 'Jan 25, 2019',
					author: {
						id: 72,
						name: 'Sean Brown',
						userName: 'inphomercial'
					}
				},
				{
					id: 1034,
					editing: false,
					text: `Yeah ok...I guess it's only kind of cool`,
					date: 'Jan 26, 2019',
					author: {
						id: 45,
						name: 'Jake Budge',
						userName: 'jbudge3'
					}
				}
			]
		};
	}

	_handleEditToggle = (id) => {
		const newComments = this.state.comments.slice();
		const index = newComments.findIndex(comment => comment.id === id);
		newComments[index].editing = !newComments[index].editing;
		this.setState({
			comments: newComments
		});
	};

	_handleInputChange = (value, id) => {
		const newComments = this.state.comments.slice();
		const index = newComments.findIndex(comment => comment.id === id);
		newComments[index].text = value;
		this.setState({
			comments: newComments
		});
	};

	_renderCommentCards = () => {
		const { comments } = this.state;

		return comments.map((comment) => {
			return (
				<CommentCard
					key={ comment.id }
					comment={ comment }
					onEditToggle={ this._handleEditToggle }
					onInputChange={ this._handleInputChange }
				/>
			);
		});
	};

	render() {
		return (
			<div className="Comments">
				{ this._renderCommentCards() }
			</div>
		);
	}
}
