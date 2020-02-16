import React from "react"

class ImageCard extends React.Component {
	constructor(props) {
		super(props)

		this.state = { spans: 0 }

		this.imageRef = React.createRef()
	}

	componentDidMount() {
		// console.log(this.imageRef)
		// console.log(this.imageRef.current.clientHeight)
		this.imageRef.current.addEventListener("load", this.setSpans)
	}

	setSpans = () => {
		const imageHeight = this.imageRef.current.clientHeight

		const imageSpans = Math.ceil(imageHeight / 10)

		this.setState({ imageSpans })
	}

	render() {
		const { urls, description } = this.props.image

		return (
			<div style={{ gridRowEnd: `span ${this.state.imageSpans}` }}>
				<img ref={this.imageRef} src={urls.regular} alt={description} />
			</div>
		)
	}
}

export default ImageCard
