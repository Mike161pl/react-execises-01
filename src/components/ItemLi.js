import React from 'react'
import './ItemLi.css'
const Concept = props => {
	const img = props.image
	const imageTitle = props.title
	const h2 = props.title
	const paragraph = props.description
	return (
		<li className='concept'>
			<img src={img} alt={imageTitle} />
			<h2>{h2}</h2>
			<p>{paragraph}</p>
		</li>
	)
}
export default Concept
