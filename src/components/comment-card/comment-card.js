import React from 'react';
import { Button, Card, Icon } from "antd";
import { Input } from "antd";
import './comment-card.css';

export function CommentCard(props) {
	const {
		author,
		comment,
		onEditToggle,
		onInputChange,
	} = props;
	return (
		<Card
			size="small"
			title={ `${author.userName} (${author.name}) - ${comment.date}` }
			extra={
				<span>
					<Button htmlType="button" onClick={ () => onEditToggle(comment.id) }>
						{ comment.editing ? 'Save' : <Icon type="edit" /> }
					</Button>
				</span>
			}
		>
			{ comment.editing ? <Input.TextArea value={comment.text} onChange={ (event) => onInputChange(event.target.value, comment.id) } /> : comment.text }
		</Card>
	)
}
