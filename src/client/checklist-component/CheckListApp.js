import React, { Component } from 'react'
import moment from 'moment'

export class CheckListApp extends Component {
	constructor(props) {
		super(props)
		this.props.fetchData()
	}
	render() {
		const { onToggle, onRemove, submitValue,
			currentValue, onChange, loading, errors } = this.props
		return (
			<div className="items">
				{loading && <h3><em>Loading...</em></h3>}
				{errors.map(err => <p className="error">{err}</p>)}
				<ul>
					{
						this.props.items.map(
							item => (
								<Item
									onToggle={onToggle}
									onRemove={onRemove}
									item={item}
									key={item.id}
								/>
							)
						)
					}
				</ul>
				<div className="Add-item">
					<input
						type="text"
						onChange={e => onChange(e.target.value)}
						onKeyPress={e => {
							if (e.charCode === 13) { submitValue(currentValue) }
						}}
						value={currentValue}
					/>
					<button onClick={() => submitValue(currentValue)}>Add</button>
				</div>
			</div>
		)
	}
}

export const Item = ({ item, onToggle, onRemove }) => (
	<li key={item.id}>
		<input type="checkbox"
			checked={item.checked}
			onChange={() => onToggle(item)}
		/>
		<label
			style={{
				textDecoration: (item.checked) ? 'line-through' : ''
			}}
			className="Item-value"
			onClick={() => onToggle(item)}>
			{item.text}
		</label>
		<em className="Item-created">{moment(item.created).fromNow()}</em>
		<span className="Item-remove" onClick={() => onRemove(item.id)}>X</span>
	</li>
)
