import React, { Component } from 'react';

class Alert extends Component {
	state = {
		message: this.props.message,
		duration: this.props.duration || 2000,
		isVisible: this.props.alert
	};

	componentDidMount() {
		this.timerStart();
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	hide = () => {
		this.setState({ isVisible: false });
	};

	timerStart = () => {
		window.clearTimeout(this.timer);
		this.timer = setTimeout(this.hide, this.state.duration);
	};

	render() {
		const { isVisible } = this.state;

		return isVisible ? (
			<div className="error">{this.state.message}</div>
		) : null;
	}
}

export default Alert;
