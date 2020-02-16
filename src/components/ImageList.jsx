import React from "react"

const ImageList = (props) => {
	const images = props.images.map(({ id, urls, description }) => {
		return (
			<div key={id}>
				<img src={urls.regular} alt={description} />
			</div>
		)
	})

	return <div>{images}</div>
}

export default ImageList
