import React from 'react'

import './ItemCard.css'

const ItemCard = props => {
	const classes = props.className

	return <div className={classes}>{props.children}</div>
}

export default ItemCard
