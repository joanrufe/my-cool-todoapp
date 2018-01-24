import React, {Component} from 'react'
import moment from 'moment'

export const CheckListApp = ({
	onToggle, submitValue, onChange, items, currentValue, onRemove
}) => (
	<div className="items">
		<ul>
			{
				items.map(
					item => (
						<Item
							onToggle={onToggle}
							onRemove={onRemove}
							item={item}
							key={item.itemId}
						/>
					)
				)
			}
		</ul>
		<div className="Add-item">
			<input 
				type="text" 
				onChange={e => onChange(e.target.value)} 
				onKeyPress={ e =>  {
					if(e.charCode === 13){ submitValue()}
				} }
				value={currentValue}
			/>
			<button onClick={ () => submitValue()}>Add</button>
		</div>
	</div>
)

export const Item = ({item, onToggle, onRemove}) => (
	<li key={item.itemId}>
		<input type="checkbox" 
			checked={item.checked} 
			onChange={() => onToggle(item.itemId)}
		/>
		<label 
			style={{
				textDecoration: (item.checked)? 'line-through' : ''
			}}
			className="Item-value"
			onClick={() => onToggle(item.itemId)}>
			{item.text}
		</label> 
		<em className="Item-created">{item.created.fromNow()}</em>
		<span className="Item-remove" onClick={() => onRemove(item.itemId)}>X</span>
	</li>
)
