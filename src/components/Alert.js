import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
	state = {
		message: this.props.message || null,
		duration: this.props.duration || 2000,
		isVisible: this.props.alert || false
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
			<div className="error" data-test="component-alert">
				{this.state.message}
			</div>
		) : null;
	}
}

Alert.propTypes = {
	message: PropTypes.string,
	duration: PropTypes.number,
	isVisible: PropTypes.bool,
	alert: PropTypes.bool
};

export default Alert;
