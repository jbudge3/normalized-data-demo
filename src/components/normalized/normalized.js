import React, { Component } from 'react';
import { CommentCard } from '../comment-card/comment-card';
import './normalized.css';

export class Normalized extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: {
				byId: {
					893: {
						id: 893,
						editing: false,
						text: 'Hey I think this is pretty awesome',
						date: 'Jan 24, 2019',
						authorId: 45
					},
					946: {
						id: 946,
						editing: false,
						text: `No way, it's only kind of awesome`,
						date: 'Jan 25, 2019',
						authorId: 72
					},
					1034: {
						id: 1034,
						editing: false,
						text: `Yeah ok...I guess it's only kind of awesome`,
						date: 'Jan 26, 2019',
						authorId: 45
					}
				},
				allIds: [893, 946, 1034]
			},
			authors: {
				byId: {
					45: {
						id: 45,
						name: 'Jake Budge',
						userName: 'jbudge3'
					},
					72: {
						id: 72,
						name: 'Sean Brown',
						userName: 'inphomercial'
					}
				},
				allIds: [45, 72]
			}
		};
	}

	_handleEditToggle = (id) => this.setState((prevState) => {
		prevState.comments.byId[id].editing = !prevState.comments.byId[id].editing;
		return prevState;
	});

	_handleInputChange = (value, id) => this.setState((prevState) => {
		prevState.comments.byId[id].text = value;
		return prevState;
	});

	_renderCommentCards = () => {
		const { comments, authors } = this.state;

		return comments.allIds.map((id) => {
			const comment = comments.byId[id];
			return (
				<CommentCard
					key={ comment.id }
					author={ authors.byId[comment.authorId] }
					comment={ comment }
					onEditToggle={ this._handleEditToggle }
					onInputChange={ this._handleInputChange }
				/>
			);
		});
	};

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="Comments">
				{ this._renderCommentCards() }
			</div>
		);
	}
}
