import React from 'react';
import { Button, Card, Icon } from "antd";
import { Input } from "antd";

export function CommentCard(props) {
	const {
		comment,
		onEditToggle,
		onInputChange
	} = props;
	return (
		<Card
			size="small"
			title={ `${comment.author.userName} (${comment.author.name}) - ${comment.date}` }
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
